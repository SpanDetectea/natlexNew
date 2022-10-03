import React from 'react'
interface TChartListBtns {
    className: string,
    editChart:(index:number)=> void,
    delChart:(index:number)=> void,
    index: number
}

function ChartListBtns({className, editChart, delChart, index}:TChartListBtns) {
    return <>
        <div className={className}>
            <button type="button" className="btn btn-info" onClick={() => editChart(index)}>Edit</button>
        </div>
        <div className={className}>
            <button type="button" className="btn btn-danger" onClick={() => delChart(index)}>Delete</button>
        </div>
    </>
}

export default ChartListBtns;