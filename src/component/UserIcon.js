import { Box } from "@chakra-ui/react"
import {BsPersonCircle} from "react-icons/bs";

export const UserIcon = (props) => {
    return<Box 
        display={"inline"}
        borderRadius = {"100%"}
        p = {"4px"}
        bg = {"blue.400"}
    >
        <BsPersonCircle size={"20px"} color = "white"/>
    </Box>
}