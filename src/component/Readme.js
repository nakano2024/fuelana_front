import { Box, Container, Heading } from "@chakra-ui/react"

export const Readme = () =>{
    return<Box>
        <Heading>Fuelana</Heading>
        <Container pt = "50px" textAlign={"left"} maxW = {"container.sm"}>
            <p>
                Fuelanaは、車にかかる燃料費を算出、記録するSaaSサービスです。<br/>
                個人事業主の中には、自家用車を私的目的、業務目的の兼用で使用している方もおられるでしょう。<br/>
                そのような場合、確定申告時に私的目的を除いた、業務目的にかかる燃料費を経費として計上することがあるかもしれません。<br/>
                Fuelanaは、GPSを用いて走行距離と燃費から燃料費を算出、記録し、業務目的にどれほどの燃料費を費やしているかを把握する際に役立ちます。<br/>
            </p>
        </Container>
    </Box>
}