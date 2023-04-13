import React from "react";
import { useState } from "react";
import { updateDataChart } from "../../../store/contentReducer";
import { useTypedDispatch } from "../../../Hooks/useTypedDispatch";
import { useTypedSelector } from "../../../Hooks/useTypedSelector/useTypedSelector";
import { Slider } from "antd";

function Range() {
    const initialCountDay = useTypedSelector(state=>state.content.viewCount)
    const [countDay, setCountDay] = useState(initialCountDay);
    const dispatch = useTypedDispatch();
    const setDataFromRange = (e: string) => {
        dispatch(updateDataChart(+e))
        setCountDay(+e)
    }
    return <>
    <span>number of days from 1 to 7</span>
    <Slider value={countDay} max={7} min ={1} onChange={(e) => setDataFromRange(e)}/>
    </>
}

export default Range;