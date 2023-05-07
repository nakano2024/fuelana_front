import { HStack, Stack, Table, Tbody, Td, VStack, Text } from "@chakra-ui/react"
import { AnnualTripRecordsTotal } from "../dummy"
import { DataBox } from "./DataBox"


export const AnnualTripRecordsTotalStack = () => {

    const year = 2023;

    const annualTotal = AnnualTripRecordsTotal.annualTotal;

    return<DataBox isHeadingInvalid = {true}>
        {annualTotal !== null &&
            <VStack>
                <HStack>
                    <Text fontWeight={"bold"}>
                        {year}年度合計：
                    </Text>
                    <Text color={"red"} fontSize = {"25px"}>
                        ¥{annualTotal.grandTotalYen.toLocaleString()}
                    </Text>
                </HStack>
            </VStack>
        }
    </DataBox>
}