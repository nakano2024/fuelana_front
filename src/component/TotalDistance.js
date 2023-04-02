import { useEffect, useState } from "react"
import * as calcDistance from '@turf/distance';
import * as helpers from '@turf/helpers';

export const TotalDistance = (props)=>{
    
    const [totalDistance , setTotalDistance] = useState(0);
    const [lastPos , setLastPos] = useState({long : null , lati : null});
    const [currentPos , setCurrentPos] = useState({long : null , lati : null});

    useEffect(() => {
        //常に現在地を取得し続ける
        const watchId = navigator.geolocation.watchPosition(
            (pos) => {
                if(pos.coords){
                    const long = pos.coords.longitude;
                    const lati = pos.coords.latitude;
                    const newCurrent = {long , lati};
                    setCurrentPos(pre => {
                        //前回のcurrentPosがnull、つまり初回の場合は同じ値を入れる
                        pre.long !== null && pre.lati !== null ?
                            setLastPos(pre) : setLastPos(newCurrent);
                        //また、新たなcurrentの値として、新しい位置情報を返す
                        return newCurrent;
                    });
                }
            },
            (err) => {
                console.log(err);
            },
            {
                enableHighAccuracy : true,
                timeout : 5000,
                maximumAge : 10
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
            const delta = calcDistance.default(from , to , option);
            setTotalDistance(totalDistance + delta);
        }
    } , [currentPos , lastPos]);


    return<div>
        {lastPos.long !== null && lastPos.lati !== null &&
        <div>前回の経度 : {lastPos.long},前回の緯度 : {lastPos.lati}</div>}
        
        {currentPos.long !== null && currentPos.lati !== null &&
        <div>現在の経度 : {currentPos.long},現在の緯度 : {currentPos.lati}</div>}
        
        <div>現在の移動距離は、{totalDistance.toFixed(3)}mです。</div>
    </div>
}