import { useState } from "react";
import { useGeolocated } from "react-geolocated";


export const GpsPosition = (props) => {

    const{coords ,isGeolocationAvailable , isGeolocationEnabled }
    = useGeolocated({
        positionOptions  : {
            enableHighAccuracy: false,
        },
        userDecisionTimeout : 5000,
    });

    if(!isGeolocationAvailable){
        return<div>お使いの端末では、位置情報機能を利用できません。</div>
    }

    if(!isGeolocationEnabled){
        return <div>位置情報の取得を許可してください。</div>
    }

    if(isGeolocationAvailable && isGeolocationEnabled){
        return<div>
            <div>
                現在地は、経度{coords.longitude.toFixed(4)}度、緯度{coords.latitude.toFixed(4)}度です。
            </div>
        </div>
    }
}