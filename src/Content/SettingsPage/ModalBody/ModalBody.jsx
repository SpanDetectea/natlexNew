

function ModalBody({ setChartTitle, title, data, setChartData,
                     toggleActiveColor, setChartColor, type, 
                     setChartType,color,isActiveColor 
                    }) {
    return <div className="modal-body">

        <label className="form-label">Chart title</label>
        <div className="input-group mb-3">
            <input type="text" className="form-control" aria-describedby="basic-addon3" value={title} onInput={(e) => setChartTitle(e.target.value)} placeholder='my new chart' />
        </div>
        <label className="form-label">Data</label>
        <div className="input-group mb-3">
            <input type="text" className="form-control" aria-describedby="basic-addon3" value={data} onInput={(e) => setChartData(e.target.value)} placeholder='1,2,3,4' />
        </div>

        <div className="dropdown-center">
            <button className="btn btn-secondary dropdown-toggle w-25" style={{ backgroundColor: color }} type="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={toggleActiveColor}>
                Color
            </button>
            <ul className={"dropdown-menu" + (isActiveColor ? " show" : "")} onClick={toggleActiveColor}>
                <li><a className="dropdown-item bg-danger" href="#" onClick={() => setChartColor('#dc3545')}>Red</a></li>
                <li><a className="dropdown-item bg-primary" href="#" onClick={() => setChartColor('#0d6efd')}>Blue</a></li>
                <li><a className="dropdown-item bg-success" href="#" onClick={() => setChartColor('#198754')}>Green</a></li>
                <li><a className="dropdown-item bg-warning" href="#" onClick={() => setChartColor('#ffc107')}>Yellow</a></li>
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