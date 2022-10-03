import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { weatherApi } from "../../../api/api";
import { updateChart } from "../../../store/actions";

function Range() {
    const [countDay, setCountDay] = useState('7');
    const dispatch = useDispatch();

    const setDataFromRange = async (e: string) => {
        setCountDay(e)
        let res = await weatherApi.getWeatherData('Moscow', e)
        dispatch(updateChart(res))
    }
    return <>
        <label htmlFor="customRange2" className="form-label">number of days from 1 to 7</label>
        <input type="range" className="form-range" min="1" max="7" id="customRange2" value={countDay} onChange={(e) => setDataFromRange(e.target.value)} />
    </>
}

export default Range;