import { Button} from "@chakra-ui/react"
import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { OnClick } from "../context";

export const SidebarLink = (props) => {

    const navigate = useNavigate();

    const drawerOnClose = useContext(OnClick);

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