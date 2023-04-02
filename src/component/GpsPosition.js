import { useEffect, useState } from "react";



export const GpsPosition = (props) => {

    const [position , setPosition] = useState({lon : null , lati : null}); 

    useEffect(() => {

        const watchId = navigator.geolocation.watchPosition(
            (pos) => {
                const {lon , lati} = pos.coords;
                setPosition({lon , lati});
            },
            (err) => {

            }
        );
        return () => navigator.geolocation.clearWatch(watchId);

    } , []);


    return<div>
        現在の経度は{position.lon}度、緯度は{position.lati}度
    </div>
    
    
}