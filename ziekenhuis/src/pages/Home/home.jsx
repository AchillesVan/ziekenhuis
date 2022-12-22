import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import "./Home.css";
import foto from "../../images/foto_ziekenhuis.png";

const Home = () => {
  return (
    <>
      <Flex gap="5" direction="column" align="center">
        <Heading className="header">Home</Heading>
        <Text>
          Welkom op de webpagina van het Achilles Ziekenhuis! Een afspraak maken
          of bij ons komen werken? Dan ben je op de juiste plaats!
        </Text>
        <Image p="5" src={foto} alt="Foto van het Achilles Ziekenhuis" />
      </Flex>
    </>
  );
};

export default Home;
