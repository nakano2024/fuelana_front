import { Box, Button, Drawer, DrawerCloseButton, DrawerContent, DrawerOverlay, Flex, IconButton, ListIcon, MenuIcon } from "@chakra-ui/react"
import { useState } from "react"
import { FiMenu } from "react-icons/fi";
import { OnClick } from "../context";
import { SidebarContent } from "./SidebarContent";

export const CollapsibleSidebar = () => {
    
    const [isOpen, setIsOpen] = useState(false);

    const onClose = () => {
        setIsOpen(false);
    }
    
    return<Box>
        <IconButton icon={<FiMenu size={20}/>} onClick={()=> setIsOpen(true)} variant = {"ghost"}/>
        <OnClick.Provider value={onClose}>
            <Drawer isOpen = {isOpen} onClose = {onClose} placement = "left">
                <DrawerOverlay>
                    <DrawerContent bg={"gray.200"} px = {"3px"} pt = {"40px"}>
                        <DrawerCloseButton />
                        <SidebarContent />
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        </OnClick.Provider>
    </Box>
}