import { Button} from "@chakra-ui/react"
import { Link, useNavigate } from "react-router-dom"

export const SidebarLink = (props) => {

    const navigate = useNavigate();

    return<Button 
        w={"100%"} 
        bg = {"transparent"}
        justifyContent = {"flex-start"}
        _hover = {{bg : "gray.300"}}
        _active = {{bg : "gray.400"}}
        onClick = {() => navigate(props.to)}
        color = {"gray.600"}
    >
        {props.children}
    </Button>
}