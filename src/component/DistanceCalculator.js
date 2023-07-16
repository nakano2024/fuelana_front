import { useEffect, useState } from "react";
import turf from "turf";
import length from "@turf/length";
import { Button } from "@chakra-ui/react";


export const DistanceCalculator = (props) => {
    
    const [totalDistance , setTotalDistance] = useState(0);
    const [lastPos , setLastPos] = useState({long : null , lati : null});
    const [currentPos , setCurrentPos] = useState({long : null , lati : null});
    const [watchId , setWatchId] = useState(null); 

    const start = () => {
        //常に現在地を取得し続ける
        setWatchId(
            navigator.geolocation.watchPosition(
                (pos) => {
                    if(pos.coords){
                        const long = pos.coords.longitude;
                        const lati = pos.coords.latitude;
                        const newCurrent = {long , lati};
                        setCurrentPos(pre => {
                            //前回のcurrentPosがnull、つまり初回の場合は同じ値を入れる
                            pre.long === null && pre.lati === null ?
                                setLastPos(newCurrent) : setLastPos(pre)
                            //また、新たなcurrentの値を返す
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
                    maximumAge : 1000
                }
            )
        );
        
    };

    //計測停止
    const stop = () => {
        navigator.geolocation.clearWatch(watchId);
        setWatchId(null);
        const initPos = {long : null , lati : null};
        setCurrentPos(initPos);
        setLastPos(initPos);
        setTotalDistance(0);
    }

    useEffect(() => {
        if(currentPos.long !== null && currentPos.lati !== null && lastPos.long !== null && lastPos.lati !== null){
            //座標をセットする
            const line = turf.lineString([
                [lastPos.long , lastPos.lati],
                [currentPos.long , currentPos.lati]
            ]);
            const option = {units : "kilometers"};
            //asで関数をinportした場合、.defaultで呼び出す
            const delta = length(line , option);
            //GPSによる誤差を防ぐため4m以上10m以下の移動距離を計上する
            setTotalDistance((preDis) => 0.004 <= delta && delta <= 0.03 ? preDis + delta : preDis);
        }
    } , [currentPos , lastPos]);


    return<div>
        <div style={{"marginBottom" : "35px"}}>
            {lastPos.long !== null && lastPos.lati !== null &&
            <div>前回の経度 : {lastPos.long},前回の緯度 : {lastPos.lati}</div>}
            
            {currentPos.long !== null && currentPos.lati !== null &&
            <div>現在の経度 : {currentPos.long},現在の緯度 : {currentPos.lati}</div>}
            
            <div>現在の移動距離は、{totalDistance.toFixed(3)}kmです。</div>
        </div>
        <div>
            <Button colorScheme={"red"} onClick={start} isDisabled={watchId !== null}>
                計測開始
            </Button>
            <Button colorScheme={"blue"} onClick={stop} isDisabled={watchId === null}>
                計測停止
            </Button>
        </div>
    </div>
}

