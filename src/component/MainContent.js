import { Box, Container, Flex, Switch } from "@chakra-ui/react"
import { useContext } from "react"
import { Navigate, Route, Routes } from "react-router-dom";
import { IsMobile } from "../context"
import { CarAddPage } from "./CarAddPage";
import { CarDetailsPage } from "./CarDetailsPage";
import { IntroductionPage } from "./IntroductionPage";
import { UserSettingPage } from "./UserSettingPage";


export const MainContent = () => {

    const isMobile = useContext(IsMobile);

    return<Container 
        maxW={"container.xl"}
        px = {"30px"}
        pb = {"30px"}
        color = {"gray.600"}
        mb = {isMobile ? "400px" : "50px"}
    >
        <Routes>
            <Route path={"/"}  element={<CarAddPage />} />
            <Route path={"/cars/:carId"} element={<CarDetailsPage/>} />
            <Route path={"/setting"} element={<UserSettingPage />}/>
            <Route path={"/*"} element={<Navigate to={"/"}/>}/>
        </Routes>   
    </Container>

}