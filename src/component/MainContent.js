import { Box, Container, Flex, Switch } from "@chakra-ui/react"
import { useContext } from "react"
import { Route, Routes } from "react-router-dom";
import { IsMobile } from "../context"
import { CarAddPage } from "./CarAddPage";
import { CarDetailsPage } from "./CarDetailsPage";
import { UserSettingPage } from "./UserSettingPage";


export const MainContent = () => {

    const isMobile = useContext(IsMobile);

    return<Container 
        maxW={"container.xl"}
        pt = {isMobile ? "150px" : "30px"}
        px = {"30px"}
        pb = {"30px"}
        color = {"gray.600"}
        mb = {isMobile ? "400px" : "50px"}
    >
        <Routes>
            <Route path={"/cars/add"}  element={<CarAddPage />} />
            <Route path={"/cars/:carId"} element={<CarDetailsPage/>} />
            <Route path={"/setting"} element={<UserSettingPage />}/>
        </Routes>   
    </Container>

}