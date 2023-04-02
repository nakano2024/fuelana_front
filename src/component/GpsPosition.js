import { useEffect, useState } from "react";



export const GpsPosition = (props) => {

    const [position , setPosition] = useState({lon : 0.0 , lati : 0.0}); 

    useEffect(() => {

        const watchId = navigator.geolocation.watchPosition(
            (pos) => {
                const lon  = pos.coords.longitude;
                const lati = pos.coords.latitude;
                setPosition({lon , lati});
            },
            (err) => {
                navigator.geolocation.clearWatch(watchId);
            },
            {
                enableHighAccuracy : true,
                timeout : 500,
                maximumAge : 0
            }
        );
        //useEffectに設定したコールバックの戻り値は、コンポーネントのアンマウント時に返される
        return () => navigator.geolocation.clearWatch(watchId);
    } , []);


    return<div>
        現在の経度は{position.lon}度、緯度は{position.lati}度
    </div>
    
}