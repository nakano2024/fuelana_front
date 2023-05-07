import { HStack, Stack, Table, Tbody, Td, VStack, Text } from "@chakra-ui/react"
import { AnnualTripRecordsTotal } from "../dummy"
import { DataBox } from "./DataBox"


export const AnnualTripRecordsTotalStack = () => {

    const annualTotal = AnnualTripRecordsTotal.annualTotal;

    return<DataBox isHeadingInvalid = {true}>
        {annualTotal !== null &&
            <VStack>
                <HStack>
                    <Text fontWeight={"bold"}>
                        通年合計燃料費：
                    </Text>
                    <Text color={"red"} fontSize = {"30px"}>
                        ¥{annualTotal.grandTotalYen}
                    </Text>
                </HStack>
            </VStack>
        }
    </DataBox>
}