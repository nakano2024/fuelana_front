import { useEffect, useState } from "react"
import * as calcDistance from '@turf/distance';
import * as helpers from '@turf/helpers';

export const TotalDistance = (props)=>{
    
    const [totalDistance , setTotalDistance] = useState(0.0);
    const [lastPos , setLastPos] = useState({long : null , lati : null});
    const [currentPos , setCurrentPos] = useState({long : 0.0 , lati : 0.0});

    useEffect(() => {
        //常に現在地を取得し続ける
        const watchId = navigator.geolocation.watchPosition(
            (pos) => {
                const long = pos.coords.longitude;
                const lati = pos.coords.latitude;
                setCurrentPos({long , lati});
            },
            (err) => {},
            {
                enableHighAccuracy : false,
                timeout : 5000,
                maximumAge : 0
            }
        );
        return () => navigator.geolocation.clearWatch(watchId);
    },
    []);


    //currentPosを取得するたびに、totalDistanceに計上していく
    useEffect(() => {
        if(lastPos.long && lastPos.lati){
            const from = helpers.point([lastPos.long , lastPos.lati]);
            const to = helpers.point([currentPos.long , currentPos.lati]);
            const option = {units : "merters"};
            const distance = calcDistance(from , to , option);
            setTotalDistance(totalDistance + distance);
        }
        //lastPosのプロパティを現在地で上書きする
        const newLastLong = currentPos.long;
        const newLastLati = currentPos.lati;
        setLastPos({newLastLong , newLastLati});
    } ,[currentPos]);



    return<div>
        現在の移動距離は、{totalDistance}mです。
    </div>
}