import { Box, Divider } from "@chakra-ui/react"
import { useContext } from "react"
import { IsMobile } from "../context"
import { AnnualTripRecordsTotalStack } from "./AnnualTripRecordsTotalStack";
import { AnnualTripRecordsTotalTable } from "./AnnualTripRecordsTotalTable";
import { MonthlyTripRecordsDataBox } from "./MonthlyTripRecordsDataBox";


export const TripRecordDataContainer = () => {

    const isMobile = useContext(IsMobile);

    return<Box>
        <Divider />
            <Box py={"3px"}>

                <Box Box pt={"16px"}>
                    <MonthlyTripRecordsDataBox />
                </Box>

                <Box pt={"35px"}>
                    {isMobile ?<AnnualTripRecordsTotalStack /> : <AnnualTripRecordsTotalTable />}
                </Box>

            </Box>
    </Box>
}