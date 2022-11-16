import "./DoctorCard.css";
import {Card, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, Button } from '@chakra-ui/react';

const DoctorCard = ({ doctor }, onClick) => {
  if(doctor !== null && doctor !== undefined) { 
    return (
      <>
      <Card className="doctor-card" maxW="sm">
        <CardBody>
          <Image 
            src={doctor.foto} 
            alt={doctor.naam} 
            borderRadius='lg'/>
          <Stack mt='6' spacing='3'>
            <Heading size='md' spacing='3'>{doctor.naam}</Heading>
            <Text>
              {doctor.afdeling}
            </Text>
            <Text>
              {doctor.locatie}
            </Text>
          </Stack>
        </CardBody>
        <Divider/>
        <CardFooter>
          <Button variant='solid' colorScheme='gray' onClick={onClick}>Maak afspraak</Button>                 
        </CardFooter>
      </Card>
      </>
    );
  }
  else {
    return (
      <>
      </>
    )
  };
};

export default DoctorCard;