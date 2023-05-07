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
                    月別合計燃料費：
                </Td>
                <Td color={"red"} fontSize = {"30px"}>
                    ¥{monthlyTotal.grandTotalYen.toFixed(1)}
                </Td>
            </Tr>
        </Tbody>
    </Table>
}