import "./voor_patienten.css"
import DoctorCard from "../../components/DoctorCard/DoctorCard";
import Select from "react-select"
import { useState } from "react";
import { Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody } from "@chakra-ui/react";
import AppointmentCard from "../../components/AppointmentCard/AppointmentCard";

const doctors = [
  {
    foto: require("../../images/doctor.png"),
    naam: "John Doe",
    afdeling: "Neurologie",
    locatie: "Amsterdam",
  },
  {
    foto: require("../../images/doctor.png"),
    naam: "Achilles Vanbelleghem",
    afdeling: "Cardiologie",
    locatie: "Langemark",
  },
  {
    foto: require("../../images/doctor.png"),
    naam: "Marie Vanbelleghem",
    afdeling: "Cardiologie",
    locatie: "Langemark",
  },
  {
    foto: require("../../images/doctor.png"),
    naam: "Marie Vanbelleghem",
    afdeling: "Cardiologie",
    locatie: "Langemark",
  },
  {
    foto: require("../../images/doctor.png"),
    naam: "Marie Vanbelleghem",
    afdeling: "Cardiologie",
    locatie: "Langemark",
  },
  {
    foto: require("../../images/doctor.png"),
    naam: "Marie Vanbelleghem",
    afdeling: "Cardiologie",
    locatie: "Langemark",
  },{
    foto: require("../../images/doctor.png"),
    naam: "Marie Vanbelleghem",
    afdeling: "Cardiologie",
    locatie: "Langemark",
  }
];

const specialiteiten = [
  {value: "cardiologie", label: "Cardiologie"},
  {value: "neurologie", label: "Neurologie"},
  {value: "psychiatrie", label: "Psychiatrie",}
];

const VoorPatienten = () => {

  const [dokters, setDokters] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  let filteredDokters = [];

  const onChange = (option) => {
    filteredDokters = doctors.filter(doctor => doctor.afdeling.toLowerCase() === option.value.toLowerCase());
    if(filteredDokters[0] !== undefined) {
      setDokters(filteredDokters);
    }
    else {
      setDokters([]);
    }
  }

  
  return (
    <>
    <Stack>
      <Heading size='lg' className='header'>Voor patiënten</Heading>
      <Text>Een afspraak maken? Dan ben je op de juiste plek. Selecteer een afdeling, kies je dokter en maak nu je afspraak!</Text>
      <div className='select'>
        <Select options={specialiteiten} onChange={onChange}/>
      </div>
      <Flex className='doctors'>
      {dokters.map((doctor) => {
            return (
              <div>
                <DoctorCard className="doctor-card" doctor={doctor} onClick={onOpen}/>
              </div>
            )
          })}
      </Flex>
    </Stack>

    <Modal isOpen={isOpen} onClose={onClose}>
      <AppointmentCard/>
    </Modal>
    </>
  );
};

export default VoorPatienten;