import { Box, Button, HStack, IconButton, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, VStack, useDisclosure } from "@chakra-ui/react"
import { DistanceCalculator } from "./DistanceCalculator";
import {BsX} from "react-icons/bs";

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
                    <Box textAlign = {"right"}>
                        <IconButton
                            icon = {<BsX size={"25px"}/>}
                            variant = {"ghost"}
                            onClick = {onClose}
                        />
                    </Box>
                </ModalHeader>

                <ModalBody>
                    <VStack>
                        <HStack>
                            <DistanceCalculator />
                        </HStack>
                    </VStack>
                </ModalBody>

                <ModalFooter>
                    
                </ModalFooter>
            </ModalContent>
        </Modal>
    </Box>
}