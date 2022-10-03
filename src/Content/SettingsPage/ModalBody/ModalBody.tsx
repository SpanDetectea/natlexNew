import React from "react";
import { useState } from 'react'
import './ModalBody.scss'

interface IModalBody {
    setChartTitle: (value: string) => void;
    title: string;
    data: string;
    setChartData: (value: string) => void;
    toggleActiveColor: () => void;
    setChartColor: (value: string) => void;
    type: string;
    setChartType: (value: string) => void;
    color: string;
    isActiveColor: boolean;
}

function ModalBody({ setChartTitle, title, data, setChartData,
    toggleActiveColor, setChartColor, type,
    setChartType, color, isActiveColor
}: IModalBody) {
    const [firstLabel, setFirstLabel] = useState(false)
    const [secondLabel, setSecondLabel] = useState(false)
    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'first':
                setFirstLabel(true)
                break;
            case 'second':
                setSecondLabel(true)
                break;
        }

    }
    const keyHandler = (event) => {
        if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 ||
            event.keyCode == 27 || event.keyCode == 188 || event.keyCode == 190 ||
            (event.keyCode == 65 && event.ctrlKey === true) ||
            (event.keyCode >= 35 && event.keyCode <= 39)) {
            return;
        } else {
            if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105)) {
                event.preventDefault();
            }
        }
    }
    return <div className="modal-body">

        <label className="form-label">Chart title</label>
        <div className="input-group mb-3">
            <input type="text" name="first" className="form-control" onBlur={blurHandler} aria-describedby="basic-addon3" value={title} onInput={(e) => setChartTitle((e.target as HTMLInputElement).value)} placeholder='my new chart' />
        </div>
        {title === '' && firstLabel && <div className="alert alert-danger" role="alert">
            Incorrect title
        </div>}
        <label className="form-label">Data</label>
        <div className="input-group mb-3">
            <input type="text" name="second" className="form-control" onBlur={blurHandler} onKeyDown={keyHandler} aria-describedby="basic-addon3" value={data} onInput={(e) => setChartData((e.target as HTMLInputElement).value)} placeholder='1,2,3,4' />
        </div>
        {data === '' && secondLabel && <div className="alert alert-danger" role="alert">
            Incorrect data
        </div>}
        <div className="dropdown-center">
            <button className="btn btn-secondary dropdown-toggle w-25" style={{ backgroundColor: color }} type="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={toggleActiveColor}>
                Color
            </button>
            <ul className={"dropdown-menu" + (isActiveColor ? " show" : "")} onClick={toggleActiveColor}>
                <li><a className="dropdown-item bg-danger"  onClick={() => setChartColor('#dc3545')}>Red</a></li>
                <li><a className="dropdown-item bg-primary" onClick={() => setChartColor('#0d6efd')}>Blue</a></li>
                <li><a className="dropdown-item bg-success" onClick={() => setChartColor('#198754')}>Green</a></li>
                <li><a className="dropdown-item bg-warning" onClick={() => setChartColor('#ffc107')}>Yellow</a></li>
            </ul>
        </div>
        <div className="btn-group my-2" role="group" aria-label="Базовая группа переключателей радио">
            <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" checked={type === 'line' ? true : false} />
            <label className="btn btn-outline-primary" htmlFor="btnradio1" onClick={() => setChartType('line')}>Line</label>
            <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" checked={type === 'column' ? true : false} />
            <label className="btn btn-outline-primary" htmlFor="btnradio2" onClick={() => setChartType('column')}>Column</label>
        </div>

    </div>
}

export default ModalBody;