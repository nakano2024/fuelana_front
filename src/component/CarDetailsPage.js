import { Box, HStack, VStack, Text, Divider } from "@chakra-ui/react"
import { useContext } from "react";
import { IsMobile } from "../context";
import { CarDetails } from "../dummy"
import { CarInfoStack } from "./CarInfoStack";
import { CarInfoTable } from "./CarInfoTable";
import { ContentWrapper } from "./ContentWrapper";
import { TotalDistance } from "./TotalDistance";


export const CarDetailsPage = () => {

    const isMobile = useContext(IsMobile);

    const car = CarDetails.car;

    return<Box>
        {car !== null &&
            <ContentWrapper heading = {car.discription}>
                {isMobile ?
                    <CarInfoStack />
                :
                    <CarInfoTable />
                }
            </ContentWrapper>
        }
    </Box>
}