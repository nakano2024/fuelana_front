import { Table, Tbody, Td } from "@chakra-ui/react"
import { AnnualTripRecordsTotal } from "../dummy";
import { DataBox } from "./DataBox"


export const AnnualTripRecordsTotalTable = ()=>{

    const annualTotal = AnnualTripRecordsTotal.annualTotal;

    return<DataBox isHeadingInvalid = {true}>
        {annualTotal !== null &&
            <Table>
                <Tbody>
                    <Td fontWeight={"bold"}>
                        通年合計燃料費
                    </Td>
                    <Td color={"red"} fontSize = {"30px"}>
                        ¥{annualTotal.grandTotalYen}
                    </Td>
                </Tbody>
            </Table>
        }
    </DataBox>
}