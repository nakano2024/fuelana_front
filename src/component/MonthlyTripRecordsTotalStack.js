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
                    {month}月の月間合計：
                </Text>
                <Text color={"red"} fontSize = {"25px"}>
                    ¥{monthlyTotal.grandTotalYen.toFixed(0)}
                </Text>
            </HStack>
        }
    </VStack>
}