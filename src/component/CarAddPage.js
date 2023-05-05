import { Box, Heading } from "@chakra-ui/react"
import { CarAddForm } from "./CarAddForm"


export const CarAddPage = () => {
    return<Box>
        <Heading>新しい車の追加</Heading>
        <Box pt = {"100px"}>
            <CarAddForm />
        </Box>
    </Box>
}