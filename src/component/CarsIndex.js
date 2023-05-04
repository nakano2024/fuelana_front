import { Box } from "@chakra-ui/react";
import { useState } from "react"
import { Cars } from "../dummy";
import { SidebarLink } from "./SidebarLink";
import {BsCarFrontFill} from "react-icons/bs"

export const CarsIndex = () => {

    const [cars , setCars] = useState(Cars.cars);

    return<Box>
        {
            cars.map(car => <SidebarLink to = {`cars/${car.carId}`}>
                <BsCarFrontFill />&nbsp;&nbsp;
                {car.discription.length <= 10 ?car.discription : car.discription.substring(0, 10) + "..."}
            </SidebarLink>)
        }
    </Box>
}