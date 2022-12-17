import {
  Card,
  CardBody,
  CardFooter,
  Button,
  Heading,
  Divider,
  Text,
  CardHeader,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const VacatureCard = ({ vacature }) => {
  if (vacature) {
    return (
      <>
        <Card className="vacature-card">
          <CardHeader>
            <Heading size="md" spacing="3">
              {vacature.titel}
            </Heading>
          </CardHeader>
          <CardBody>
            <Text>{vacature.omschrijving}</Text>
          </CardBody>
          <CardFooter>
            <Link to={`/vacature/${vacature.id}`}>
              <Button variant="solid" colorScheme="gray">
                <Text>Meer info</Text>
              </Button>
            </Link>
          </CardFooter>
        </Card>
        <Divider />
      </>
    );
  }
}

export default VacatureCard;