import { useCallback, useState, useEffect } from "react";
import useVacatures from "../../api/vacature";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Heading, Flex, Text, Button } from "@chakra-ui/react";

const Vacature = () => {
  const [vacature, setVacature] = useState([]);

  const vacatureApi = useVacatures();
  const navigate = useNavigate();

  const id = useParams().id;

  const fetchVacature = useCallback(async () => {
    try {
      const vacatureRes = await vacatureApi.getById(id);
      setVacature(vacatureRes.data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    fetchVacature();
  }, [fetchVacature]);

  return (
    <>
      <Flex p="5" gap="3" direction="column" align="flex-start">
        <Heading as="h1">{vacature.titel}</Heading>
        <Heading as="h2" size="md">
          Omschrijving
        </Heading>
        <Text>{vacature.omschrijving}</Text>
        <Heading as="h2" size="md">
          Profiel
        </Heading>
        <Text>{vacature.profiel}</Text>
        <Heading as="h2" size="md">
          Aanbod
        </Heading>
        <Text>{vacature.aanbod}</Text>
        <Heading as="h2" size="md">
          Type job
        </Heading>
        <Text>{vacature.type_job}</Text>
        <Heading as="h2" size="md">
          Type contract
        </Heading>
        <Text>{vacature.type_contract}</Text>
        <Heading as="h2" size="md">
          Werkregime
        </Heading>
        <Text>{vacature.werkregime}</Text>
        <Link to={`/vacature/${id}/solliciteer`}>
          <Button>Solliciteer</Button>
        </Link>
      </Flex>
    </>
  );
};

export default Vacature;
