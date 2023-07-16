import { Box, Input, VStack, Text, FormLabel, FormControl, Textarea, Button, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, Select, RadioGroup, Radio, HStack } from "@chakra-ui/react"
import { useState } from "react";

export const CarAddForm = () =>{

    const [discription , setDiscription] = useState("");
    const [fuelTypeName, setFuelTypeName] = useState("REGULAR");
    const [kilometersPerLiter, setKilometersPerLiter] = useState(0);


    const submitHandler = (event) => {
        event.preventDefault();
        console.log(`${discription}、${fuelTypeName}、${kilometersPerLiter}`);
    }

    return<form>
        <VStack spacing={10}>

            <FormControl id = {"discription"} maxWidth={"500px"}>
                <FormLabel fontWeight={"bold"}>
                    車種や用途、特徴など
                </FormLabel>
                <Textarea 
                    h={"90px"} 
                    placeholder = {"例：赤いセダン、通勤用の自家用車"}
                    value = {discription}
                    onChange = {(event) => setDiscription(event.target.value)}
                />
            </FormControl>

            <FormControl id = {"fuel_type_name"} maxWidth={"500px"}>
                <FormLabel fontWeight={"bold"}>
                    油種
                </FormLabel>
                <RadioGroup onChange={setFuelTypeName} value={fuelTypeName}>
                    <HStack spacing={5}>
                        <Radio value="REGULAR">レギュラー</Radio>
                        <Radio value="HIGH_OCTAN">ハイオク</Radio>
                        <Radio value="DIESEL">軽油</Radio>
                    </HStack>
                </RadioGroup>
            </FormControl>

            <FormControl id = {"kilometers_per_Liter"} maxWidth={"500px"}>
                <FormLabel fontWeight={"bold"}>
                    燃費（km/L）
                </FormLabel>
                <NumberInput min={0}>
                    <NumberInputField 
                        onChange={(event) => setKilometersPerLiter(event.target.value)}
                        value = {kilometersPerLiter}
                    />
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