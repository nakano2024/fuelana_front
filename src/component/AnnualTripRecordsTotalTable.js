import { Table, Tbody, Td } from "@chakra-ui/react"
import { useContext } from "react";
import { Year } from "../context";
import { AnnualTripRecordsTotal } from "../dummy";
import { DataBox } from "./DataBox"
import { YearMonthNotSelected } from "./YearMonthNotSelected";


export const AnnualTripRecordsTotalTable = ()=>{

    const year = useContext(Year);

    const annualTotal = AnnualTripRecordsTotal.annualTotal;

    return<Table>
        <Tbody>
            <Td fontWeight={"bold"}>
                {year}年度合計：
            </Td>
            <Td color={"red"} fontSize = {"25px"}>
                ¥{annualTotal.grandTotalYen.toLocaleString()}
            </Td>
        </Tbody>
    </Table>

}