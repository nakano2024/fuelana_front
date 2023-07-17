import { useContext, useEffect, useState } from "react";
import turf from "turf";
import length from "@turf/length";
import { Box, Button, FormControl, HStack, Radio, RadioGroup, VStack } from "@chakra-ui/react";
import { OnClick } from "../context";

export const DistanceCalculator = (props) => {
    const onClose = useContext(OnClick); 

    const [totalDistance, setTotalDistance] = useState(0);
    const BUSINESS = "BUSINESS";
    const PRIVATE = "PRIVATE";
    const [purposeName, setPurposeName] = useState(BUSINESS);

    const [lastPos, setLastPos] = useState({long : null, lati : null});
    const [currentPos, setCurrentPos] = useState({long : null, lati : null});
    const [watchId, setWatchId] = useState(null); 

    const INIT = "INIT"
    const PROCESSING = "PROCESSING"
    const FINISHED = "FINISHED"
    const [status, setStatus] = useState(INIT);

    const start = () => {
        //常に現在地を取得し続ける
        setWatchId(() => {
            //ステータスを同期的にprocessingに変更
            setStatus(PROCESSING);

            //watchIdステートの値をセットする
            return navigator.geolocation.watchPosition(
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
        });
    };

    //計測停止
    const stop = () => {
        setWatchId(watchId => {
            //状態を終了に移行させる
            setStatus(FINISHED);

            //位置情報の取得を停止する
            navigator.geolocation.clearWatch(watchId);

            //位置情報を初期化する
            const initPos = {long : null, lati : null};
            setCurrentPos(initPos);
            setLastPos(initPos);

            //watchIdステートをnull状態にする
            return null;
        });
    }

    //データの保存
    const save = () => {
        onClose();
    }

    //データの破棄
    const discard = () => {
        const isComfirmed = window.confirm("本当に破棄しますか？");
        isComfirmed && onClose();
    } 

    //距離の計算処理
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
    }, [currentPos , lastPos]);

    return<Box>
        {(status === PROCESSING || status === FINISHED) &&
            <VStack style={{"marginBottom" : "35px"}}>  
                <Box mb = {"8px"}>
                    {status === PROCESSING &&
                        <Box fontWeight = {"bold"}>
                            計測中です。
                        </Box>
                    }

                    {status === FINISHED &&
                        <Box fontWeight = {"bold"}>
                            計測を終了しました。
                        </Box>
                    }
                </Box>

                <Box color = {"red"} fontSize = {"20px"} fontWeight = {"bold"}>
                    走行距離 : {totalDistance.toFixed(3)}km
                </Box>
            </VStack>
        }

        {status === INIT &&
            <VStack>
                <Box pb = {"32px"} fontWeight = {"bold"}>
                    走行距離の計測を開始します。
                </Box>

                <Box pb = {"32px"}>
                    <Button 
                        colorScheme = {"red"} 
                        onClick = {start} 
                        isDisabled = {status == PROCESSING}
                    >
                        計測開始
                    </Button>
                </Box>

                <Box>
                    <RadioGroup 
                        onChange = {setPurposeName}
                        value = {purposeName}
                    >
                        <HStack spacing={5}>
                            <span>用途 : </span>

                            <Radio value={BUSINESS}>
                                <Box fontWeight = {"bold"}>業務</Box>
                            </Radio>

                            <Radio value={PRIVATE}>
                                <Box fontWeight = {"bold"}>プライベート</Box>
                            </Radio>
                        </HStack>
                    </RadioGroup>
                </Box>
            </VStack>
        }

        {status === PROCESSING &&
            <VStack>
                <Button colorScheme = {"blue"} onClick = {stop} isDisabled = {status == FINISHED}>
                    計測終了
                </Button>
            </VStack>
        }

        {status === FINISHED &&
            <VStack>
                <Box mb = {"8px"}>
                    <Button colorScheme = {"green"} onClick = {save}>
                        保存する
                    </Button>
                </Box>

                <Box>
                    <Button colorScheme = {"red"} onClick = {discard}>
                        破棄する
                    </Button>
                </Box>
            </VStack>
        }
    </Box>
}