import { Divider, HStack, VStack, Text, Box, Heading } from "@chakra-ui/react"
import { CarDetails } from "../dummy";
import { DataBox } from "./DataBox";


export const CarInfoStack = () => {

    const car = CarDetails.car;

    const getFuelTypeNameElement = (fuelTypeName) => {
        if(fuelTypeName === "REGULAR")return <span>レギュラー</span>
        if(fuelTypeName === "HIGH_OCTAN")return <span>ハイオク</span>
        if(fuelTypeName === "DIESEL")return <spa>軽油</spa>
    }

    return<DataBox heading = {"基本情報"}>
        {car !== null &&
            <VStack spacing={5}>
                <HStack>
                    <Text fontWeight={"bold"}>説明：</Text>
                    <Text>{car.discription}</Text>
                </HStack>
                <Divider />

                <HStack>
                    <Text fontWeight={"bold"}>油種：</Text>
                    <Text>
                        {getFuelTypeNameElement(car.fuelTypeName)}
                    </Text>
                </HStack>
                <Divider />

                <HStack>
                    <Text fontWeight={"bold"}>燃費：</Text>
                    <Text>{car.kilometersPerLiter.toFixed(2)}km/L</Text>
                </HStack>
                <Divider />
            </VStack>
        }
    </DataBox>
}