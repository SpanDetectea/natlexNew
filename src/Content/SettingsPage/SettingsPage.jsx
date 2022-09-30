import './SettingsPage.scss'
import { useSelector, useDispatch } from 'react-redux';
import { setNewChart, toggleListActive } from '../../store/actions';
import { useState } from 'react';
import FormLabel from '../../common/FormLabel/FormLabel';

function Settings() {
    const chartList = useSelector(state => state.content.chartList);
    const dispatch = useDispatch();
    const toggleActive = (index) => dispatch(toggleListActive(index))
    const [title, setTitle] = useState('New Chart')
    const [color, setColor] = useState('red')
    const [data, setData] = useState([0, 1, 2, 3])

    const [state, setstate] = useState(false)

    const setNC = () => dispatch(setNewChart(title,color,data.split(',')))
    // const setNC = () => console.log(data.split(','))
    return <div className="settings container-sm">
        <ul className="list-group">
            {chartList.map((item, index) => <li key={index} onClick={() => toggleActive(index)} className={"list-group-item list-group-item-action list-group-item-info settings__list" + (item.isActive ? " active" : "")}>{item.name}</li>)}
        </ul>
        {/* <button type="button" className="btn btn-primary">Add chart</button> */}
        <button type="button" className="btn btn-primary" onClick={() => setstate(!state)} data-bs-toggle="modal" data-bs-target="#exampleModal">
            Add chart
        </button>

        <div className={"modal fade" + (state ? ' show' : "")} style={state ? { display: 'block' } : null} id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Adding a new chart</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
                    </div>
                    <div className="modal-body">

                        <label className="form-label">Chart title</label>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" aria-describedby="basic-addon3" value={title} onInput={(e) => setTitle(e.target.value)} />
                        </div>
                        <label className="form-label">Color</label>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" aria-describedby="basic-addon3" value={color} onInput={(e) => setColor(e.target.value)} />
                        </div>
                        <label className="form-label">Data</label>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" aria-describedby="basic-addon3" value={data} onInput={(e) => setData(e.target.value)} />
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