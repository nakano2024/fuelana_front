import { Box, Divider, Heading, Table, Tbody, Td, Th, Tr } from "@chakra-ui/react"
import { CarDetails } from "../dummy";
import { DataBox } from "./DataBox";


export const CarInfoTable = () => {

    const car = CarDetails.car;

    const getFuelTypeNameElement = (fuelTypeName) => {
        if(fuelTypeName === "REGULAR")return <span>レギュラー</span>
        if(fuelTypeName === "HIGH_OCTAN")return <span>ハイオク</span>
        if(fuelTypeName === "DIESEL")return <spa>軽油</spa>
    }

    return<DataBox heading = {"基本情報"}>
        {car !== null &&
            <Table variant={"simple"} minH = "250px">
                <Tbody>
                    <Tr>
                        <Th>
                            説明：
                        </Th>
                        <Td>
                            {car.discription}
                        </Td>
                    </Tr>

                    <Tr>
                        <Th>
                            油種：
                        </Th>
                        <Td>
                            {getFuelTypeNameElement(car.fuelTypeName)}
                        </Td>
                    </Tr>

                    <Tr>
                        <Th>
                            燃費：
                        </Th>
                        <Td>
                            {car.kilometersPerLiter.toFixed(1)}km/L
                        </Td>
                    </Tr>
                </Tbody>
            </Table>
        }
    </DataBox>
}