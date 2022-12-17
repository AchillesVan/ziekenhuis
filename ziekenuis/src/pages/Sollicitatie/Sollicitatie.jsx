import {
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  Flex,
  HStack,
  Button,
  Input,
} from "@chakra-ui/react";
import useSollicitaties from "../../api/sollicitatie";
import { Field, Form, Formik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import useGebruiker from "../../api/gebruiker";
import { useAuth0 } from "@auth0/auth0-react";

const Sollicitatie = () => {
  const sollicitatieApi = useSollicitaties();
  const gebruikerApi = useGebruiker();
  const navigate = useNavigate();

  const id = useParams().id;
  const { user } = useAuth0();

  return (
    <>
      <Formik
        initialValues={{ reeds_werkzaam_in_ziekenhuis: "0", opleiding: "", vacaturespecifieke_vragen: "" }}
        onSubmit={ async (values) => {
          try {
            values.vacature_id = id;
            const { rijksregisternummer } = await gebruikerApi.getByAuth0(user.sub);
            values.gebruiker_id = rijksregisternummer;
            await sollicitatieApi.createSollicitatie(values);
            navigate(`/vacature/${id}`);
          }
          catch (error) {
            alert("Plaatsen sollicitatie mislukt");
            console.log(error);
            navigate(`/vacature/${id}`);

          }
          
        }}
      >
        {(props) => (
          <Form>
            <Flex p="5" direction="column" align="flex-start">
              <Field name="reeds_werkzaam_in_ziekenhuis">
                {({ field }) => (
                  <FormControl>
                    <FormLabel>Reeds werkzaam in het ziekenhuis?</FormLabel>
                    <RadioGroup {...field}>
                      <HStack spacing="24px">
                        <Radio {...field} value="0">
                          Nee
                        </Radio>
                        <Radio {...field} value="1">
                          Ja
                        </Radio>
                      </HStack>
                    </RadioGroup>
                  </FormControl>
                )}
              </Field>
              <Field name="opleiding">
                {({ field }) => (
                  <FormControl>
                    <FormLabel>Opleiding</FormLabel>
                    <Input {...field} placeholder="Opleiding" />
                  </FormControl>
                )}
              </Field>
              <Field name="vacaturespecifieke_vragen">
                {({ field }) => (
                  <FormControl>
                    <FormLabel>Vacaturespecifieke vragen</FormLabel>
                    <Input {...field} placeholder="Vragen" />
                  </FormControl>
                )}
              </Field>
              <Button
                colorScheme="brand"
                mt={4}
                isLoading={props.isSubmitting}
                type="submit"
              >
                Solliciteer
              </Button>
            </Flex>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Sollicitatie;
