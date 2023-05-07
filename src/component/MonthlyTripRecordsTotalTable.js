import { Table, Tbody, Td, Th, Tr } from "@chakra-ui/react";
import { AnnualTripRecordsTotal, MonthlyTripRecords } from "../dummy"
import { DataBox } from "./DataBox"


export const MonthlyTripRecordsTotalTable = () => {

    const month = 5;

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