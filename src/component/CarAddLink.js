import { Box } from "@chakra-ui/react"
import { FiPlus } from "react-icons/fi"
import { SidebarLink } from "./SidebarLink"

export const CarAddLink = () => {
    return<Box>
        <SidebarLink to = {"/"}>
            <FiPlus/>&nbsp;&nbsp;新しい車の追加
        </SidebarLink>
    </Box>
}