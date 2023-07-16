import { Box, Button, Divider, FormControl, HStack, Input, Switch, VStack } from "@chakra-ui/react"
import { useContext, useState } from "react"
import { IsMobile, Month, Year } from "../context"
import { AnnualTripRecordsTotalDataBox } from "./AnnualTripRecordsTotalDataBox";
import { MonthlyTripRecordsDataBox } from "./MonthlyTripRecordsDataBox";


export const TripRecordDataContainer = () => {

    const isMobile = useContext(IsMobile);

    const BUSINESS = "BUSINESS";
    const PRIVATE = "PRIVATE";
    const [purpose, setPurpose] = useState(BUSINESS);

    const nowData = new Date();
    const [year, setYear] = useState(nowData.getFullYear());
    const [month, setMonth] = useState(nowData.getMonth() + 1);

    const yearMonthHandler = (event) => {
        const selectedValue = event.target.value;
        const [year, month] = selectedValue.split("-");
        setYear(parseInt(year));
        setMonth(parseInt(month));
    }

    return<Box>
            <VStack pt={"25px"}>
                <HStack spacing={5}>
                    <Button 
                        p = {"2px"}
                        minW = {"100px"}
                        colorScheme={"blackAlpha"}
                        onClick = {() => setPurpose(BUSINESS)}
                        isDisabled={purpose === BUSINESS}
                        opacity = {0.5}
                        _disabled = {{"opacity" : 1.0, cursor: "not-allowed" }}
                    >
                        業務
                    </Button>
                    <Button
                        p = {"2px"}
                        minW = {"100px"}
                        colorScheme={"blackAlpha"}
                        onClick = {() => setPurpose(PRIVATE)}
                        isDisabled={purpose === PRIVATE}
                        opacity = {0.5}
                        _disabled = {{"opacity" : 1.0, cursor: "not-allowed" }}
                    >
                        プライベート
                    </Button>
                </HStack>

                <FormControl>
                    <Input 
                        type={"month"} 
                        onChange={yearMonthHandler} 
                        value = {`${year}` + `-` + String(month).padStart(2 , 0)}
                    />
                </FormControl>
            </VStack>

            <Year.Provider value={year}>
                <Month.Provider value={month}>
                    <Box py={"3px"}>
                        <Box Box pt={"16px"}>
                            <MonthlyTripRecordsDataBox />
                        </Box>

                        <Box pt={"35px"}>
                            <AnnualTripRecordsTotalDataBox />
                        </Box>
                    </Box>
                </Month.Provider>
            </Year.Provider>    
    </Box>
}