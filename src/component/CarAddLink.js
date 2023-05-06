import { Box } from "@chakra-ui/react"
import { FiPlus } from "react-icons/fi"
import { SidebarLink } from "./SidebarLink"

export const CarAddLink = () => {
    return<Box>
        <SidebarLink to = {"/cars/add"}>
            <FiPlus/>新しい車の登録
        </SidebarLink>
    </Box>
}