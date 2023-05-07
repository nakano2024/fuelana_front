import { Box, Divider } from "@chakra-ui/react";
import { useContext } from "react";
import { IsMobile } from "../context";
import { DataBox } from "./DataBox"
import { MonthlyTripRecordsTable } from "./MonthlyTripRecordsTable";
import { MonthlyTripRecordsTotalStack } from "./MonthlyTripRecordsTotalStack";
import { MonthlyTripRecordsTotalTable } from "./MonthlyTripRecordsTotalTable";

export const MonthlyTripRecordsDataBox = () => {

    const month = 5;
    
    const isMobile = useContext(IsMobile);

    return<DataBox heading = {`${month}月の走行記録`}>
        <Box>
            {isMobile ? <MonthlyTripRecordsTotalStack/> : <MonthlyTripRecordsTotalTable />}
        </Box>
        <Box pt={"60px"}>
            <MonthlyTripRecordsTable />
        </Box>
    </DataBox>
}