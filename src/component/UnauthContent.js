import { Box } from "@chakra-ui/react"
import { Navigate, Route, Routes } from "react-router-dom"
import { IntroductionPage } from "./IntroductionPage"


export const UnauthContent = () => {
    return<Box>
        <Routes>
            <Route path={"/introduction"} element = {<IntroductionPage/>}/>
            <Route path={"/*"} element={<Navigate to={"/introduction"}/>}/>
        </Routes>
    </Box>
}