import "./voor_patienten.css"
import DoctorCard from "../../components/DoctorCard/DoctorCard";
import Select from "react-select"
import { useState } from "react";
import { Flex, Heading, Spacer, Stack, Text,Box } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { useEffect } from "react";
import useDokter from "../../api/dokter";
import { useCallback } from "react";


const VoorPatienten = () => {

  const dokterApi = useDokter();
  
  const [afdelingen, setAfdelingen] = useState();
  const [dokters, setDokters] = useState([]);

  const fetchAllDokters = useCallback(async () => {
    try {
      const dataObj = await dokterApi.getAll();
      if(dataObj) {
        setDokters(dataObj.data);
      }
    }
    catch (error) {
      console.error(error);
    }
  }, []);

  const fetchAfdelingen = useCallback(async () => {
    try {
      const dataObj = await dokterApi.getAllAfdelingen();
      if(dataObj) {
        const afdelingen = dataObj.map(afdeling => {return {value: afdeling.afdeling, label: afdeling.afdeling};});
        setAfdelingen(afdelingen);
      }
    }
    catch (error) {
      console.error(error);
    }
  }, []);

  const fetchAllByAfdeling = useCallback(async (afdeling) => {
    try {
      const dataObj = await dokterApi.getAllByAfdeling(afdeling);
      if(dataObj) {
        setDokters(dataObj);
      }
    }
    catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    fetchAfdelingen();
    fetchAllDokters();
  }, [fetchAfdelingen, fetchAllDokters]);

  const onResetClick = () => {
    fetchAllDokters();
  };
  const onChange = (option) => {
    fetchAllByAfdeling(option.value);
  }
  
  return (
    <>
    <Stack>
      <Flex direction="column" align="center">
        <Heading size='lg' className='header'>Voor patiënten</Heading>
        <Text p="3">Een afspraak maken? Dan ben je op de juiste plek. Selecteer een afdeling, kies je dokter en maak nu je afspraak!</Text> 
      </Flex>
      <Flex>
        <Spacer />
        <Box p="2.5">
          <Select options={afdelingen} onChange={onChange}/>
        </Box>
        <Box p="2.5">
          <Button onClick={onResetClick}><Text>Toon alle afdelingen</Text></Button>
        </Box>
        
        <Spacer />
      </Flex>
      <Flex rowGap="2" justify="flex-start" wrap="wrap" direction="row">
      {dokters
          .map((doctor) => {
            return (
              <Box p="5">
                  <DoctorCard doctor={doctor} />
              </Box>        
            )
          })}
      </Flex>
    </Stack>
    </>
  );
};

export default VoorPatienten;