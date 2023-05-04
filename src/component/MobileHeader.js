import { Box, CardHeader, Flex, Heading } from "@chakra-ui/react"
import { CollapsibleSidebar } from "./CollapsibleSidebar"

export const MobileHeader = () => {
    return<Flex position={"fixed"} bg = {"gray.300"} w="100%" h={"45px"} p = {"3px"}>
        <CollapsibleSidebar/>
    </Flex>
}