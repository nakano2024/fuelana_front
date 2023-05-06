import { Flex } from "@chakra-ui/react"
import { useContext } from "react"
import { IsMobile } from "../context"
import { MainContent } from "./MainContent";
import { SidebarHeaderWrapper } from "./SidebarHeaderWrapper";


export const AuthCountent = () =>{

    const isMobile = useContext(IsMobile);

    return<Flex
        fontSize={isMobile? "90%" : "100%"}
    >
        <SidebarHeaderWrapper />
        <MainContent />
    </Flex>
}