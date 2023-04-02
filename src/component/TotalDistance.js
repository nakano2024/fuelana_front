import { useEffect, useState } from "react"
import * as calcDistance from '@turf/distance';
import * as helpers from '@turf/helpers';

export const TotalDistance = (props)=>{
    
    const [totalDistance , setTotalDistance] = useState(0.0);
    const [lastPos , setLastPos] = useState({long : null , lati : null});
    const [currentPos , setCurrentPos] = useState({long : null , lati : null});

    useEffect(() => {
        //常に現在地を取得し続ける
        const watchId = navigator.geolocation.watchPosition(
            (pos) => {
                if(pos.coords){
                    const long = pos.coords.longitude;
                    const lati = pos.coords.latitude;
                    //currentPosがnull、つまり初回の場合は同じ値を入れる
                    currentPos.long !== null && currentPos.lati !== null? 
                        setLastPos(currentPos):
                        setLastPos({long , lati})
                    ;
                    setCurrentPos({long , lati});
                }
            },
            (err) => {
                console.log(err);
            },
            {
                enableHighAccuracy : false,
                timeout : 5000,
                maximumAge : 0
            }
        );
        return () => navigator.geolocation.clearWatch(watchId);
    }, []);

    useEffect(() => {
        if(currentPos.long !== null && currentPos.lati !== null && lastPos.long !== null && lastPos.lati !== null){
            const from = helpers.point([lastPos.long , lastPos.lati]);
            const to = helpers.point([currentPos.long , currentPos.lati]);
            const option = {units : "meters"};
            //asで関数をinportした場合、.defaultで呼び出す
            const distance = calcDistance.default(from , to , option);
            setTotalDistance(totalDistance => totalDistance + distance);
        }
    } , [currentPos , lastPos]);


    return<div>
        現在の移動距離は、{totalDistance}mです。
    </div>
}