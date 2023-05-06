import { Box, Heading } from "@chakra-ui/react"
import { CarAddForm } from "./CarAddForm"
import { ContentWrapper } from "./ContentWrapper"


export const CarAddPage = () => {
    return<ContentWrapper heading = {"新しい車の登録"}>
        <CarAddForm />
    </ContentWrapper>
}