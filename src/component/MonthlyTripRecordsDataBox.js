import { Box, Divider } from "@chakra-ui/react";
import { useContext } from "react";
import { IsMobile, Month, Year } from "../context";
import { DataBox } from "./DataBox"
import { MonthlyTripRecordsTable } from "./MonthlyTripRecordsTable";
import { MonthlyTripRecordsTotalStack } from "./MonthlyTripRecordsTotalStack";
import { MonthlyTripRecordsTotalTable } from "./MonthlyTripRecordsTotalTable";
import { YearMonthNotSelected } from "./YearMonthNotSelected";

export const MonthlyTripRecordsDataBox = () => {

    const year = useContext(Year);

    const month = useContext(Month);
    
    const isMobile = useContext(IsMobile);

    return<DataBox heading = {"月別走行データ"}>
        {!isNaN(year) && !isNaN(month) ?
            <Box>
                <Box>
                    {isMobile ? <MonthlyTripRecordsTotalStack/> : <MonthlyTripRecordsTotalTable />}
                </Box>
                <Box pt={"60px"}>
                    <MonthlyTripRecordsTable />
                </Box>
            </Box>
            :
            <YearMonthNotSelected />
        }
    </DataBox>
}