import "./DoctorCard.css";
import {
  CardBody,
  Stack,
  Heading,
  Text,
  Divider,
  Card,
  CardFooter,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const DoctorCard = ({ doctor }) => {
  if (doctor !== null && doctor !== undefined) {
    return (
      <>
        <Card className="doctor-card" maxW="sm">
          <CardBody>
            <Stack mt="6" spacing="3">
              <Heading size="md" spacing="3">
                {doctor.voornaam + " " + doctor.familienaam}
              </Heading>
              <Text>{doctor.afdeling}</Text>
              <Text>{doctor.locatie}</Text>
            </Stack>
          </CardBody>
          <CardFooter>
            <Link to={`/appointment/${doctor.riziv_nummer}`}>
              <Button variant="solid" colorScheme="gray">
                Maak afspraak
              </Button>
            </Link>
          </CardFooter>
        </Card>
        <Divider />
      </>
    );
  } else {
    return <></>;
  }
};

export default DoctorCard;
