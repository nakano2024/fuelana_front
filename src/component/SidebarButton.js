import { Button} from "@chakra-ui/react"
import { BsEnvelope } from "react-icons/bs";

export const SidebarButton = (props) => {

    const onClick = () => {
        props.onClick();
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
        
        <BsEnvelope/>メールアドレス：
    </Button>
}