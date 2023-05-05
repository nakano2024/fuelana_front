import { Box, Input, VStack, Text, FormLabel, FormControl, Textarea, Button, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper } from "@chakra-ui/react"
import { useState } from "react";

export const CarAddForm = () =>{

    const [discription , setDiscription] = useState("");
    const [kilometersPerLiter, setKilometersPerLiter] = useState(0);

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(`${discription}、${kilometersPerLiter}`);
    }

    return<form>
        <VStack spacing={7}>

            <FormControl id = {"discription"} maxWidth={"500px"}>
                <FormLabel fontWeight={"bold"}>
                    車種や用途、特徴など
                </FormLabel>
                <Textarea 
                    h={"90px"} 
                    placeholder = {"例：赤いセダン、通勤用の自家用車"}
                    onChange = {(event) => setDiscription(event.target.value)}
                />
            </FormControl>

            <FormControl id = {"kilometersPerLiter"} maxWidth={"500px"}>
                <FormLabel fontWeight={"bold"}>
                    燃費（km/L）
                </FormLabel>
                <NumberInput min={0}>
                    <NumberInputField onChange={(event) => setKilometersPerLiter(event.target.value)}/>
                    <NumberInputStepper>
                        <NumberIncrementStepper/>
                        <NumberDecrementStepper/>
                    </NumberInputStepper>
                </ NumberInput>
            </FormControl>

            <FormControl id = {"submit"} maxWidth={"500px"}>
                <Button 
                    onClick={submitHandler}
                    colorScheme = {"red"}
                >
                    車を追加する
                </Button>
            </FormControl>

        </VStack>
    </form>
}