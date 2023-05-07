import { Box, HStack, VStack, Text, Divider } from "@chakra-ui/react"
import { useContext } from "react";
import { IsMobile } from "../context";
import { CarDetails } from "../dummy"
import { CarInfoStack } from "./CarInfoStack";
import { CarInfoTable } from "./CarInfoTable";
import { ContentWrapper } from "./ContentWrapper";
import { TotalDistance } from "./TotalDistance";
import { MonthlyTripRecordsDataBox } from "./MonthlyTripRecordsDataBox";
import { AnnualTripRecordsTotalTable } from "./AnnualTripRecordsTotalTable";
import { AnnualTripRecordsTotalStack } from "./AnnualTripRecordsTotalStack";


export const CarDetailsPage = () => {

    const isMobile = useContext(IsMobile);

    const car = CarDetails.car;

    return<Box>
        {car !== null &&
            <ContentWrapper heading = {car.discription}>

                <Box>
                    {isMobile ?<CarInfoStack />:<CarInfoTable />}
                </Box>

                <Box pt={"65px"}>
                    <MonthlyTripRecordsDataBox />
                </Box>

                <Box pt={"65px"}>
                    {isMobile ?<AnnualTripRecordsTotalStack /> : <AnnualTripRecordsTotalTable />}
                </Box>

            </ContentWrapper>
        }
    </Box>
}