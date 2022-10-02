
function ChartListBtns({className, editChart, delChart, index}) {
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