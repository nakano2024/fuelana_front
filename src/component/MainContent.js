import { Box, Flex } from "@chakra-ui/react"
import { useContext } from "react"
import { IsMobile } from "../context"
import { TotalDistance } from "./TotalDistance";


export const MainContent = () => {

    const isMobile = useContext(IsMobile);

    return<Flex 
        mt = {isMobile ? "45px" : "0px"} 
        flex = {1}
        justifyContent = {"center"}
        p = {"10px"}
    >
        <Box>
            <TotalDistance />
        </Box>
    </Flex>
}