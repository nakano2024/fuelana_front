import { HStack, Table, Tbody, Td, Th, Tr, VStack, Text } from "@chakra-ui/react";
import { AnnualTripRecordsTotal, MonthlyTripRecords } from "../dummy"
import { DataBox } from "./DataBox"


export const MonthlyTripRecordsTotalStack = () => {

    const month = 5;

    const monthlyTotal = MonthlyTripRecords.monthlyTotal;

    return<VStack>
        {monthlyTotal !== null &&
            <HStack spacing={5}>
                <Text fontWeight={"bold"}>
                    月別合計燃料費：
                </Text>
                <Text color={"red"} fontSize = {"30px"}>
                    ¥{monthlyTotal.grandTotalYen.toFixed(1)}
                </Text>
            </HStack>
        }
    </VStack>
}