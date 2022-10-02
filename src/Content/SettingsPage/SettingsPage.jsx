import './SettingsPage.scss'
import { useSelector, useDispatch } from 'react-redux';
import { deleteChart, setNewChart, toggleListActive, editChartValue } from '../../store/actions';
import { useState } from 'react';
import useWindowDimensions from '../../Hooks/windowDimensions/windowDimensions';

function Settings() {
    const chartList = useSelector(state => state.content.chartList);
    const days = useSelector(state => state.content.data);
    const dispatch = useDispatch();
    const [title, setTitle] = useState('')
    const [color, setColor] = useState('#6c757d')
    const [data, setData] = useState('')
    const [type, setType] = useState('line')
    const [isActiveColor, setIsActiveColor] = useState(false);
    const [state, setstate] = useState(false)
    const { height, width } = useWindowDimensions();

    const toggleActive = (index) => dispatch(toggleListActive(index))
    const setNC = () => {
        console.log('setNc')
        console.log(state)
        state === 'add' ? dispatch(setNewChart(title, color, data.split(','),type)) : dispatch(editChartValue(title, color, Array.isArray(data) ? data : data.split(','), state,type))
        setstate(false)
    }
    const toggleActiveColor = () => setIsActiveColor(!isActiveColor)
    const delChart = (id) => dispatch(deleteChart(id))
    const addChart = () => {
        setstate('add');
        setTitle('')
        setData('')
        setColor('#6c757d')
    }
    const editChart = (index) => {
        setTitle(chartList[index].name);
        setColor(chartList[index].color);
        setType(chartList[index].type)
        const nameProp = chartList[index].nameEn;
        const dayData = days.map(item => item[nameProp])
        setData(dayData);
        setstate(`${index}`)
    }

    return <div className="settings container-sm">
        <ul className="list-group">
            {chartList.map((item, index) => {
                return <div className="container text-center my-2" key={index}>
                    {width >= '770' && <div className="row">
                        <div className="col">
                            <li key={index} onClick={() => toggleActive(index)} className={"list-group-item list-group-item-action list-group-item-info settings__list" + (item.isActive ? " active" : "")}>{item.name} </li>
                        </div>
                        <div className="col-md-auto ms-auto">
                            <button type="button" className="btn btn-info" onClick={() => editChart(index)}>Edit</button>
                        </div>
                        <div className="col-md-auto ms-auto">
                            <button type="button" className="btn btn-danger" onClick={() => delChart(index)}>Delete</button>
                        </div>
                    </div>
                    }
                    {width < '770' && <>
                        <div className="row">
                            <div className="col">
                                <li key={index} onClick={() => toggleActive(index)} className={"list-group-item list-group-item-action list-group-item-info settings__list" + (item.isActive ? " active" : "")}>{item.name} </li>
                            </div>
                        </div>
                        <div className="row justify-content-between mt-2">
                            <div className="col-4">
                                <button type="button" className="btn btn-info" onClick={() => editChart(index)}>Edit</button>
                            </div>
                            <div className="col-4">
                                <button type="button" className="btn btn-danger" onClick={() => delChart(index)}>Delete</button>
                            </div>
                        </div>
                    </>
                    }
                </div>
            })
            }
        </ul >
        <button type="button" className="btn btn-primary mt-4" onClick={addChart} data-bs-toggle="modal" data-bs-target="#exampleModal">
            Add chart
        </button>

        <div className={"modal fade" + (state ? ' show' : "")} style={state ? { display: 'block' } : null} id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Adding a new chart</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Закрыть" onClick={() => setstate(!state)}></button>
                    </div>
                    <div className="modal-body">

                        <label className="form-label">Chart title</label>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" aria-describedby="basic-addon3" value={title} onInput={(e) => setTitle(e.target.value)} placeholder='my new chart' />
                        </div>
                        <label className="form-label">Data</label>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" aria-describedby="basic-addon3" value={data} onInput={(e) => setData(e.target.value)} placeholder='1,2,3,4' />
                        </div>

                        <div className="dropdown-center">
                            <button className="btn btn-secondary dropdown-toggle w-25" style={{ backgroundColor: color }} type="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={toggleActiveColor}>
                                Color
                            </button>
                            <ul className={"dropdown-menu" + (isActiveColor ? " show" : "")} onClick={toggleActiveColor}>
                                <li><a className="dropdown-item bg-danger" href="#" onClick={() => setColor('#dc3545')}>Red</a></li>
                                <li><a className="dropdown-item bg-primary" href="#" onClick={() => setColor('#0d6efd')}>Blue</a></li>
                                <li><a className="dropdown-item bg-success" href="#" onClick={() => setColor('#198754')}>Green</a></li>
                                <li><a className="dropdown-item bg-warning" href="#" onClick={() => setColor('#ffc107')}>Yellow</a></li>
                            </ul>
                        </div>
                        <div className="btn-group my-2" role="group" aria-label="Базовая группа переключателей радио">
                            <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" checked={type === 'line' ? true : false} />
                            <label className="btn btn-outline-primary" htmlFor="btnradio1" onClick={()=>setType('line')}>Line</label>
                            <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" checked={type === 'column' ? true : false} />
                            <label className="btn btn-outline-primary" htmlFor="btnradio2" onClick={()=>setType('column')}>Column</label>
                        </div>

                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-success" onClick={setNC}>Apply</button>
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => setstate(!state)}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div >
}

export default Settings;