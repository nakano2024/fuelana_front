import { Table, Tbody, Td, Th, Tr } from "@chakra-ui/react";
import { useContext } from "react";
import { Month, Year } from "../context";
import { AnnualTripRecordsTotal, MonthlyTripRecords } from "../dummy"
import { DataBox } from "./DataBox"


export const MonthlyTripRecordsTotalTable = () => {
    const year = useContext(Year);

    const month = useContext(Month);

    const monthlyTotal = MonthlyTripRecords.monthlyTotal;

    return<Table>
        <Tbody>
            <Tr>
                <Td fontWeight={"bold"}>
                    {month}月合計：
                </Td>
                <Td color={"red"} fontSize = {"25px"}>
                    ¥{monthlyTotal.grandTotalYen.toLocaleString()}
                </Td>
            </Tr>
        </Tbody>
    </Table>
}