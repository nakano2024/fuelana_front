import { Box, Heading } from "@chakra-ui/react"
import { CarAddForm } from "./CarAddForm"
import { ContentWrapper } from "./ContentWrapper"
import { Readme } from "./Readme"


export const CarAddPage = () => {
    return<Box>
        <Readme />

        <Box pt = "100px">
            <ContentWrapper heading = {"新しい車両の追加"}>
                <CarAddForm />
            </ContentWrapper>
        </Box>
    </Box>
}