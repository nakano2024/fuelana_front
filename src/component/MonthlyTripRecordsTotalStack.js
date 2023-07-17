import { HStack, Table, Tbody, Td, Th, Tr, VStack, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { Month, Year } from "../context";
import { AnnualTripRecordsTotal, MonthlyTripRecords } from "../dummy"
import { DataBox } from "./DataBox"


export const MonthlyTripRecordsTotalStack = () => {
    const month = useContext(Month);

    const year = useContext(Year);

    const monthlyTotal = MonthlyTripRecords.monthlyTotal;

    return<VStack>
        {monthlyTotal !== null &&
            <HStack spacing={5}>
                <Text fontWeight={"bold"}>
                    {year}年{month}月合計：
                </Text>
                <Text color={"red"} fontSize = {"25px"}>
                    ¥{monthlyTotal.grandTotalYen.toLocaleString()}
                </Text>
            </HStack>
        }
    </VStack>
}