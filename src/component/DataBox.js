import { Box, Divider, Heading } from "@chakra-ui/react"

export const DataBox = (props) => {
    return<Box 
        border = {"1px solid"} 
        borderColor={"gray.200"} 
        borderRadius={"lg"} p = {"5px"}
        boxShadow={"md"}
    >
        <Heading size={"sm"} py = {"10px"}>
            {props.heading}
        </Heading>
        <Divider />
        <Box pt = "30px">
            {props.children}
        </Box>
    </Box>
}