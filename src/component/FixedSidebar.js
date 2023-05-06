import { Box } from "@chakra-ui/react"
import { SidebarContent } from "./SidebarContent"

export const FixedSidebar = () =>{
    return<Box 
        p = {"3px"} 
        minH={"100vh"} 
        bg={"gray.200"} 
        width="260px"
        position={"fixed"}
        zIndex = {10}
    >
        <SidebarContent />
    </Box> 
}