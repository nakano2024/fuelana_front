import { Box } from "@chakra-ui/react";
import { useState } from "react"
import { Cars } from "../dummy";
import { SidebarLink } from "./SidebarLink";

export const CarsIndex = () => {

    const [cars , setCars] = useState(Cars.cars);

    return<Box>
        {
            cars.map(car => <SidebarLink to = {`cars/${car.carId}`}>
                {car.discription.length <= 12 ?car.discription : car.discription.substring(0, 12) + "..."}
            </SidebarLink>)
        }
    </Box>
}