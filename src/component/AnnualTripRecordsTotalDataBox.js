import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { useContext } from "react"
import { IsMobile, Year } from "../context"
import { AnnualTripRecordsTotal } from "../dummy";
import { AnnualTripRecordsTotalStack } from "./AnnualTripRecordsTotalStack";
import { AnnualTripRecordsTotalTable } from "./AnnualTripRecordsTotalTable";
import { DataBox } from "./DataBox"
import { YearMonthNotSelected } from "./YearMonthNotSelected";


export const AnnualTripRecordsTotalDataBox = () =>{

    const isMobile = useContext(IsMobile);

    const year = useContext(Year);

    const annualTotal = AnnualTripRecordsTotal.annualTotal;

    return<DataBox heading = {`通年合計燃料費`}>
        {!isNaN(year) ?
            <Box>
                {isMobile ? <AnnualTripRecordsTotalStack/> : <AnnualTripRecordsTotalTable />}
            </Box>
            :
            <YearMonthNotSelected />
        }
    </DataBox>

}