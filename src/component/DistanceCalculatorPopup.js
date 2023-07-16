import { Box, Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react"

export const DistanceCalculatorPopup = () => {
    const {isOpen, onOpen, onClose} = useDisclosure();

    return<Box>
        <Button colorScheme = "red" onClick = {onOpen}>
            走行データの追加
        </Button>

        <Modal 
            isOpen = {isOpen} onClose = {onClose} closeOnOverlayClick = {false} 
        >
            <ModalOverlay />
            
            <ModalContent>
                <ModalHeader>

                </ModalHeader>

                <ModalBody>
                    
                </ModalBody>

                <ModalFooter>
                    
                </ModalFooter>
            </ModalContent>
        </Modal>
    </Box>
}