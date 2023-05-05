import { Box, Container, Flex, Switch } from "@chakra-ui/react"
import { useContext } from "react"
import { Route, Routes } from "react-router-dom";
import { IsMobile } from "../context"
import { CarAddPage } from "./CarAddPage";
import { TotalDistance } from "./TotalDistance";
import { UserSettingPage } from "./UserSettingPage";


export const MainContent = () => {

    const isMobile = useContext(IsMobile);

    return<Container 
        maxW={"container.xl"}
        mt = {isMobile ? "45px" : "0px"}
        p = {"30px"}
        color = {"gray.600"}
    >
        <Routes>
            <Route path={"/cars/add"}  element={<CarAddPage />} />
            <Route path={"/cars/:carId"} element={<TotalDistance />} />
            <Route path={"/setting"} element={<UserSettingPage />}/>
        </Routes>   
    </Container>

}