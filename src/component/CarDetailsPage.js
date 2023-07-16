import { Box, HStack, VStack, Text, Divider } from "@chakra-ui/react"
import { useContext } from "react";
import { IsMobile } from "../context";
import { CarDetails } from "../dummy"
import { CarInfoStack } from "./CarInfoStack";
import { CarInfoTable } from "./CarInfoTable";
import { ContentWrapper } from "./ContentWrapper";
import { MonthlyTripRecordsDataBox } from "./MonthlyTripRecordsDataBox";
import { AnnualTripRecordsTotalTable } from "./AnnualTripRecordsTotalTable";
import { AnnualTripRecordsTotalStack } from "./AnnualTripRecordsTotalStack";
import { TripRecordDataContainer } from "./TripRecordDataContainer";
import { DataBox } from "./DataBox";
import { DistanceCalculatorPopup } from "./DistanceCalculatorPopup";

export const CarDetailsPage = () => {

    const isMobile = useContext(IsMobile);

    const car = CarDetails.car;

    return<Box>
        {car !== null &&
            <ContentWrapper heading = {car.discription}>
                {isMobile &&
                    <Box mb = {"36px"}>
                        <DistanceCalculatorPopup />
                    </Box>
                }

                <Box mb = {"36px"}>
                    {isMobile ?<CarInfoStack />:<CarInfoTable />}
                </Box>

                <Divider />

                <Box mb = {"36px"}>
                    <TripRecordDataContainer />
                </Box>
            </ContentWrapper>
        }
    </Box>
}