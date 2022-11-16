import { ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text } from "@chakra-ui/react";
import "./AppointmentCard.css";
import { Select } from 'react-select'

const AppointmentCard = (isOpen, onClose, AppointmentData) => {
  return (
      <ModalOverlay>
        <ModalContent>
          <ModalHeader>
            <ModalCloseButton />
          </ModalHeader>
          <ModalBody>
            <Text>Test</Text>
          </ModalBody>
        </ModalContent>
      </ModalOverlay>
  );
};

export default AppointmentCard;