import { Box, Flex } from "@chakra-ui/react"
import { useContext } from "react"
import { IsMobile } from "../context"
import { MainContent } from "./MainContent";
import { SidebarHeaderWrapper } from "./SidebarHeaderWrapper";


export const AuthCountent = () =>{

    const isMobile = useContext(IsMobile);

    return<Box>
        <SidebarHeaderWrapper />
        <Box 
            ml = {isMobile ? "0px" : "260px"}
            pt = {isMobile ? "150px" : "30px"}
        >
            <MainContent />
        </Box>
    </Box>
}