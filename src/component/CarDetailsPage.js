import { Box } from "@chakra-ui/react"
import { CarDetails } from "../dummy"
import { ContentWrapper } from "./ContentWrapper";
import { TotalDistance } from "./TotalDistance";


export const CarDetailsPage = () => {

    const car = CarDetails.car;

    return<ContentWrapper heading = {car.discription}>
        <TotalDistance />
    </ContentWrapper>
}