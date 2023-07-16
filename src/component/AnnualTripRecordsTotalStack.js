import { HStack, Stack, Table, Tbody, Td, VStack, Text, Divider } from "@chakra-ui/react"
import { useContext } from "react";
import { Year } from "../context";
import { AnnualTripRecordsTotal } from "../dummy"
import { DataBox } from "./DataBox"
import { YearMonthNotSelected } from "./YearMonthNotSelected";


export const AnnualTripRecordsTotalStack = () => {

    const year = useContext(Year);

    const annualTotal = AnnualTripRecordsTotal.annualTotal;

    return<VStack>
        {annualTotal !== null &&
            <HStack>    
                <Text fontWeight={"bold"}>
                    {year}年度合計：
                </Text>
                <Text color={"red"} fontSize = {"25px"}>
                    ¥{annualTotal.grandTotalYen.toLocaleString()}
                </Text>
            </HStack>
        }
        <Divider />
    </VStack>
}