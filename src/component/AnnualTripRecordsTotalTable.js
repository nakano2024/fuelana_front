import { Table, Tbody, Td } from "@chakra-ui/react"
import { AnnualTripRecordsTotal } from "../dummy";
import { DataBox } from "./DataBox"


export const AnnualTripRecordsTotalTable = ()=>{

    const year = 2023;

    const annualTotal = AnnualTripRecordsTotal.annualTotal;

    return<DataBox isHeadingInvalid = {true}>
        {annualTotal !== null &&
            <Table>
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
    </DataBox>
}