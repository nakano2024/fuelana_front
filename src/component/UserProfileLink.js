import { Box, Button } from "@chakra-ui/react"
import { useState } from "react"
import { AuthenticatedGeneralUser } from "../dummy";
import { SidebarLink } from "./SidebarLink";
import { UserIcon } from "./UserIcon";


export const UserProfileLink = () => {

    const [authUser , setAuthUser] = useState(AuthenticatedGeneralUser.authenticatedUser);

    return<Box>
        <SidebarLink to = "/setting">
            <UserIcon/>&nbsp;&nbsp;{authUser !== null 
                && authUser.name.length <= 6 ? authUser.name : authUser.name.substring(0, 6) + "..."}さん
        </SidebarLink>
    </Box>
}