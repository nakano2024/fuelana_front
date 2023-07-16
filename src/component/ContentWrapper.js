import { Box, Divider, Heading } from "@chakra-ui/react"
import { useContext } from "react"
import { IsMobile } from "../context"


export const ContentWrapper = (props)=>{

    const isMobile = useContext(IsMobile);

    return<Box>
        <Heading size={"md"} >
           {props.heading}
        </Heading>
        <Divider/>
        <Box 
            mt={isMobile? "40px" : "100px"}
        >
            {props.children}
        </Box>
    </Box>
}