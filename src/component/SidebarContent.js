import { Box, Flex } from "@chakra-ui/react"
import { useContext } from "react"
import { IsMobile } from "../context"
import { CarAddLink } from "./CarAddLink"
import { CarsIndex } from "./CarsIndex"
import { UserProfileLink } from "./UserProfileLink"

export const SidebarContent = ()=>{

    const isMobile = useContext(IsMobile);

    return<Box fontWeight = {"bold"} textAlign = "left">
        <Box>
            <UserProfileLink/>
            <CarAddLink />
        </Box>
        <Box 
            borderTop={"1px solid gray"} 
            mt = {"16px"} 
            py={"10px"}
            maxH = {isMobile? "240px" : "640px"}
            overflow = {"scroll"}
        >
            <CarsIndex />
        </Box>
    </Box>
}