import { Box, Heading } from "@chakra-ui/react"
import { useContext } from "react";
import { IsMobile } from "../context";
import { AuthenticatedAdminUser, AuthenticatedGeneralUser } from "../dummy"
import { ContentWrapper } from "./ContentWrapper";
import { UserInfoStack } from "./UserInfoStack";
import { UserInfoTable } from "./UserInfoTable";

export const UserSettingPage = () => {

    const authenticatedUser = AuthenticatedGeneralUser.authenticatedUser;

    const isMobile = useContext(IsMobile);

    return<Box>
        <ContentWrapper heading = {"ユーザー設定"}>
            {isMobile ? <UserInfoStack /> : <UserInfoTable />}
        </ContentWrapper>
    </Box>
}