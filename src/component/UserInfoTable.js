import { Box,Icon, Table, Tbody, Td, Th, Tr } from "@chakra-ui/react";
import { IconBase } from "react-icons";
import { BsFillEnvelopeFill, BsLockFill} from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { AuthenticatedAdminUser } from "../dummy";
import { UserIcon } from "./UserIcon";


export const UserInfoTable = () => {

    const authenticatedUser = AuthenticatedAdminUser.authenticatedUser;

    return<Table minH={"300px"}>
        <Tbody>
            <Tr>
                <Th>
                    ユーザー名：
                </Th>
                <Td>
                    {authenticatedUser.name}
                </Td>
            </Tr>
            <Tr>
                <Th>
                    <Icon as={BsFillEnvelopeFill} mr = {"3px"}/>
                    メールアドレス：
                </Th>
                <Td>
                    {authenticatedUser.email}
                </Td>
            </Tr>
            <Tr>
                <Th>
                    <Icon as= {BsLockFill} mr = {"3px"}/>
                    パスワード：
                </Th>
                <Td>
                    {authenticatedUser.password}
                </Td>
            </Tr>
            <Tr>
                <Th>ユーザータイプ：</Th>
                <Td>
                    {authenticatedUser.roleName === "ADMIN" ? "管理者ユーザー" : "一般ユーザー"}
                </Td>
            </Tr>
        </Tbody>
</Table>
}