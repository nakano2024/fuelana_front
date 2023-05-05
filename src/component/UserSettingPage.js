import { Box, Heading } from "@chakra-ui/react"
import { useContext } from "react";
import { IsMobile } from "../context";
import { AuthenticatedAdminUser, AuthenticatedGeneralUser } from "../dummy"
import { UserInfoStack } from "./UserInfoStack";
import { UserInfoTable } from "./UserInfoTable";

export const UserSettingPage = () => {

    const authenticatedUser = AuthenticatedGeneralUser.authenticatedUser;

    const isMobile = useContext(IsMobile);

    return<Box>
        <Heading>ユーザー設定</Heading>
        <Box textAlign={"left"} pt = {"100px"}>
            {isMobile ? <UserInfoStack /> : <UserInfoTable />}
        </Box>
    </Box>
}