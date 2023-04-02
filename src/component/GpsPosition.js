import { useEffect, useState } from "react";



export const GpsPosition = (props) => {

    const [position , setPosition] = useState({lon : null , lati : null}); 

    useEffect(() => {

        navigator.geolocation.getCurrentPosition(
            (position) => {
                setPosition({
                    lon : position.coords.longitude, 
                    lati : position.coords.latitude
                });
            },
            (error) => {
                window.alert(error);
            }
        );

    } , []);

    return<div>
        現在の経度は{position.lon}度、緯度は{position.lati}度
    </div>
    
}