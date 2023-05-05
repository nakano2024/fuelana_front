import { Box, Stack, Icon, Text, VStack, Divider, HStack} from "@chakra-ui/react"
import { AuthenticatedGeneralUser } from "../dummy"
import { BsFillEnvelopeFill, BsLockFill} from "react-icons/bs";

export const UserInfoStack = () => {

    const authenticatedUser = AuthenticatedGeneralUser.authenticatedUser;

    return<VStack spacing={10} >
        <HStack>
            <Text fontSize={"sm"} fontWeight={"bold"}>
                ユーザー名：
            </Text>
            <Text fontSize={"md"}>
                {authenticatedUser.name}
            </Text>
        </HStack>
        <Divider/>
        <HStack>
            <Text fontSize={"sm"} fontWeight={"bold"}>
                <Icon as={BsFillEnvelopeFill} mr = {"5px"}/>
                メールアドレス：
            </Text>
            <Text fontSize={"md"}>
                {authenticatedUser.email}
            </Text>
        </HStack>
        <Divider/>
        <HStack>
            <Text fontSize={"sm"} fontWeight={"bold"}>
                <Icon as={BsLockFill} mr = {"5px"}/>
                パスワード：
            </Text>
            <Text fontSize={"md"}>
                {authenticatedUser.password}
            </Text>
        </HStack>
        <Divider/>
        <HStack>
            <Text fontSize={"sm"} fontWeight={"bold"}>
                ユーザータイプ：
            </Text>
            <Text fontSize={"md"}>
                {authenticatedUser.roleName === "ADMIN" ? "管理者ユーザー" : "一般ユーザー"}
            </Text>
        </HStack>
        <Divider/>
    </VStack>
}