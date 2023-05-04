import { Button} from "@chakra-ui/react"
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom"
import { OnClose } from "../context";

export const SidebarLink = (props) => {

    const navigate = useNavigate();

    const drawerOnClose = useContext(OnClose);

    const onClick = () => {
        navigate(props.to);
        drawerOnClose();
    }

    return<Button 
        py={"25px"}
        w={"100%"} 
        bg = {"transparent"}
        justifyContent = {"flex-start"}
        _hover = {{bg : "gray.300"}}
        _active = {{bg : "gray.400"}}
        onClick = {onClick}
        color = {"gray.600"}
    >
        {props.children}
    </Button>
}