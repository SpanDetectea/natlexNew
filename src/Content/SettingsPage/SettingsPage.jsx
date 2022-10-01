import './SettingsPage.scss'
import { useSelector, useDispatch } from 'react-redux';
import { deleteChart, setNewChart, toggleListActive, editChartValue } from '../../store/actions';
import { useState } from 'react';
import FormLabel from '../../common/FormLabel/FormLabel';

function Settings() {
    const chartList = useSelector(state => state.content.chartList);
    const days = useSelector(state => state.content.data);
    const dispatch = useDispatch();
    const [title, setTitle] = useState('New Chart')
    const [color, setColor] = useState('#6c757d')
    const [data, setData] = useState('0,1,2')
    const [isActiveColor, setIsActiveColor] = useState(false);
    const [state, setstate] = useState(false)

    const toggleActive = (index) => dispatch(toggleListActive(index))
    const setNC = () => {
        state==='add' ? dispatch(setNewChart(title, color, data.split(','))) : dispatch(editChartValue(title, color, Array.isArray(data) ? data : data.split(','), state))
        setstate(false)
    }
    const toggleActiveColor = () => setIsActiveColor(!isActiveColor)
    const delChart = (id) => dispatch(deleteChart(id))
    const editChart = (index) => {
        console.log(index)
        setTitle(chartList[index].name);
        setColor(chartList[index].color);
        const nameProp = chartList[index].nameEn;
        const dayData = days.map(item=>item[nameProp])
        setData(dayData);
        setstate(`${index}`)
    }

    return <div className="settings container-sm">
        <ul className="list-group">
            {chartList.map((item, index) => {
                return <div className="container text-center" key={index}>
                    <div className="row">
                        <div className="col">
                            <li key={index} onClick={() => toggleActive(index)} className={"list-group-item list-group-item-action list-group-item-info settings__list" + (item.isActive ? " active" : "")}>{item.name} </li>
                        </div>
                        <div className="col">
                            <button type="button" className="btn btn-info" onClick={()=>editChart(index)}>Edit</button>
                        </div>
                        <div className="col">
                            <button type="button" className="btn btn-danger" onClick={()=>delChart(index)}>Danger</button>
                        </div>
                    </div>
                </div>
            })
            }
        </ul>
        <button type="button" className="btn btn-primary" onClick={() => setstate('add')} data-bs-toggle="modal" data-bs-target="#exampleModal">
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
                            <input type="text" className="form-control" aria-describedby="basic-addon3" value={title} onInput={(e) => setTitle(e.target.value)} />
                        </div>
                        <label className="form-label">Data</label>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" aria-describedby="basic-addon3" value={data} onInput={(e) => setData(e.target.value)} />
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

                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-success" onClick={setNC}>Success</button>
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => setstate(!state)}>Закрыть</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Settings;