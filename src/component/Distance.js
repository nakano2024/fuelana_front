
import { useEffect, useState } from "react"
import * as turfHelpers from '@turf/helpers';
import * as calcDistance from '@turf/distance';

export const Distance = (props) => {

    const [distance , setDistance] = useState(0.0);


    useEffect(()=>{
        const from = turfHelpers.point([130.3196459, 31.4215626]);
        const to = turfHelpers.point([130.328972, 31.479269]);
        const option = {units : "kilometers"}
        setDistance(calcDistance(from , to , option).toFixed(3));
    } , []);

    return<div>
        <div>大野から加世田までの距離は、<span style = {{color : "red"}}>{distance}km</span>です。</div>
    </div>
}