import "./Profile.css"
import { useAuth0 } from '@auth0/auth0-react';
import { Box, Flex, Heading, RadioGroup, Stack, Radio } from '@chakra-ui/react';
import { useEffect, useState, useCallback, useRef } from 'react';
import useGebruiker from '../../api/gebruiker';
import useLand from "../../api/land";
import { Input, FormControl, FormLabel, Button, Select } from '@chakra-ui/react';
import { Formik } from "formik";

const Profile = () => {
  const gebruikerApi = useGebruiker();
  const landApi = useLand();

  const { user } = useAuth0();
  
  const [edit, setEdit] = useState(false);
  let userExists = useRef(false);
  const [landen, setLanden] = useState([]);
  const [userObj, setUserObj] = useState({});

  const fetchUserByAuth0Id = useCallback(async (auth0Id) => {
    setUserObj({...userObj, auth0id: auth0Id});
    try {
      const dataObj = await gebruikerApi.getByAuth0(auth0Id);
      if(Object.keys(dataObj).length > 0) {
        userExists.current = true;
        setUserObj({...userObj, ...dataObj});
      }
    }
    catch (error) {
      
    }
  }, []);

  const fetchLanden = useCallback(async () => {
    try {
      const dataObj = await landApi.getAllLanden();
      if(dataObj) {
        const landenTemp = dataObj.map((land) => {
          return {value: land.id, label: land.naam_mooi};
        });
        setLanden(landenTemp);
      }
    }
    catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    fetchLanden();
    fetchUserByAuth0Id(user.sub);  
  }, [fetchUserByAuth0Id, user.sub, fetchLanden]);

  const onEditClick = () => {
    setEdit(!edit);
  };

  const onSaveClick = async () => {
    if(userExists.current) {
      try {
        await gebruikerApi.updateUser(userObj);
      }
      catch (error) {
        console.error(error);
      }
    }
    else {
      try {
        console.log(JSON.stringify(userObj));
        await gebruikerApi.createUser(userObj);
        userExists.current = true;
      }
      catch (error) {
        console.error(error);
      }
    }
    
    setEdit(!edit);
  };

  return (
    <>
      <Flex justify="center">
        <Heading size="lg" className="header">Profiel</Heading>
      </Flex>
      <Flex>
        <Box maxW="700" pl="10" pr="10" pb="5" pt="5">
          <FormControl isDisabled={!edit}>
            <FormLabel>Rijksregisternummer</FormLabel>
            <Input value={userObj.rijksregisternummer} onChange={(e) => setUserObj({...userObj, rijksregisternummer: e.target.value})} />
          </FormControl>  
        </Box>
      </Flex>
      <Flex>
        <Box pl="10" pr="10" pb="5" pt="5">
          <FormControl isDisabled={!edit}>
            <FormLabel>Voornaam</FormLabel>
            <Input value={userObj.voornaam} onChange={(e) => setUserObj({...userObj, voornaam: e.target.value})} />
          </FormControl>
        </Box>
        <Box pl="10" pr="10" pb="5" pt="5">
          <FormControl isDisabled={!edit}>
            <FormLabel>Naam</FormLabel>
            <Input value={userObj.familienaam} onChange={(e) => setUserObj({...userObj, familienaam: e.target.value})} />
          </FormControl>
        </Box>
      </Flex>   
      <Flex>
        <Box pl="10" pr="10" pb="5" pt="5">
            <FormControl isDisabled={!edit}>
              <FormLabel>Geslacht</FormLabel>
              <RadioGroup value={userObj.geslacht} onChange={(value) => setUserObj({...userObj, geslacht: value})}>
                <Stack direction="row">
                  <Radio value="M">Man</Radio>
                  <Radio value="V">Vrouw</Radio>
                  <Radio value="X">Andere</Radio>
                </Stack>
              </RadioGroup>
            </FormControl>       
          </Box>
      </Flex>        
      <Flex>
      <Box pl="10" pr="10" pb="5" pt="5">
          <FormControl isDisabled={!edit}>
            <FormLabel>Geboorteplaats</FormLabel>
            <Input value={userObj.geboorteplaats} onChange={(e) => setUserObj({...userObj, geboorteplaats: e.target.value})} />
          </FormControl>
        </Box>
        <Box pl="10" pr="10" pb="5" pt="5">
          <FormControl isDisabled={!edit}>
            <FormLabel>Geboortedatum</FormLabel>
            <Input type="date" value={userObj.geboortedatum} onChange={(e) => setUserObj({...userObj, geboortedatum: e.target.value})} />
          </FormControl>
        </Box>      
      </Flex>  
      <Flex>
        <Box pl="10" pr="10" pb="5" pt="5">
          <FormControl isDisabled={!edit}>
            <FormLabel>Emailadres</FormLabel>
            <Input type="email" value={userObj.email} onChange={(e) => setUserObj({...userObj, email: e.target.value})} />
          </FormControl>
        </Box>
        <Box pl="10" pr="10" pb="5" pt="5">
          <FormControl isDisabled={!edit}>
            <FormLabel>Telefoonnummer</FormLabel>
            <Input value={userObj.telefoonnummer} onChange={(e) => setUserObj({...userObj, telefoonnummer: e.target.value})} />
          </FormControl>
        </Box>
      </Flex>  
      <Flex>
        <Box pl="10" pr="10" pb="5" pt="5">
          <FormControl isDisabled={!edit}>
            <FormLabel>Straat</FormLabel>
            <Input value={userObj.straat} onChange={(e) => setUserObj({...userObj, straat: e.target.value})} />
          </FormControl>
        </Box>
        <Box pl="10" pr="10" pb="5" pt="5">
          <FormControl isDisabled={!edit}>
            <FormLabel>Huisnummer</FormLabel>
            <Input value={userObj.huisnummer} onChange={(e) => setUserObj({...userObj, huisnummer: e.target.value})} />
          </FormControl>
        </Box>
      </Flex> 
      <Flex>
        <Box pl="10" pr="10" pb="5" pt="5">
          <FormControl isDisabled={!edit}>
            <FormLabel>Optionele adreslijn</FormLabel>
            <Input value={userObj.optionele_adreslijn} onChange={(e) => setUserObj({...userObj, optionele_adreslijn: e.target.value})} />
          </FormControl>
        </Box>
      </Flex> 
      <Flex>
        <Box pl="10" pr="10" pb="5" pt="5">
          <FormControl isDisabled={!edit}>
            <FormLabel>Postcode</FormLabel>
            <Input value={userObj.postcode} onChange={(e) => setUserObj({...userObj, postcode: e.target.value})} />
          </FormControl>
        </Box>
        <Box pl="10" pr="10" pb="5" pt="5">
          <FormControl isDisabled={!edit}>
            <FormLabel>Gemeente</FormLabel>
            <Input value={userObj.gemeente} onChange={(e) => setUserObj({...userObj, gemeente: e.target.value})} />
          </FormControl>
        </Box>
      </Flex> 
      <Flex>
        <Box pl="10" pr="10" pb="5" pt="5">
          <FormControl isDisabled={!edit}>
            <FormLabel>Land</FormLabel>
            <Select 
              value={userObj.land_id}
              onChange={(e) => {setUserObj({...userObj, land_id: e.target.value})}}>
              {landen.map((land) => {
                return <option value={land.value}>{land.label}</option>
              })}
            </Select>
          </FormControl>
        </Box>
      </Flex> 
      <Flex>
        <Box p="10" pr="5">
          <Button isDisabled={edit} onClick={onEditClick}>Wijzig</Button>   
        </Box>
        <Box p="10" pl="5">
          <Button isDisabled={!edit} onClick={onSaveClick}>Opslaan</Button>        
        </Box>
      </Flex>
    </>
  );
};

export default Profile;