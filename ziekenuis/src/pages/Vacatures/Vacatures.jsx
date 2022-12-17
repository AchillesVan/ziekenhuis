import { Heading, Box } from "@chakra-ui/react";
import "./Vacatures.css";
import useVacatures from "../../api/vacature";
import { useCallback, useEffect, useState } from "react";
import VacatureCard from "../../components/VacatureCard/VacatureCard";

const Vacatures = () => {
  const [ vacatures, setVacatures ] = useState([]);

  const vacatureApi = useVacatures();

  const fetchVacatures = useCallback(async () => {
    try {
      const vacatures = await vacatureApi.getAll();
      setVacatures(vacatures.data);
    }
    catch (error) {
      console.error(error);
    }
  }, []);

  

  useEffect(() => {
    fetchVacatures();
  }, [fetchVacatures]);

  return (
    <>
      <Heading className="header">Vacatures</Heading>
      {vacatures.map((vacature) => {
        return (
          <Box p="5">
            <VacatureCard vacature={vacature} />
          </Box>
        );
      })}
    </>
  );
};

export default Vacatures;
