import './SettingsPage.scss'
import { useSelector, useDispatch } from 'react-redux';
import { toggleListActive } from '../../store/actions';
import { useState } from 'react';

function Settings() {
    const chartList = useSelector(state => state.content.chartList);
    const dispatch = useDispatch();
    const toggleActive = (index) => dispatch(toggleListActive(index))

    const [state, setstate] = useState(false)
    return <div className="settings container-sm">
        <ul className="list-group">
            {chartList.map((item, index) => <li key={index} onClick={() => toggleActive(index)} className={"list-group-item list-group-item-action list-group-item-info settings__list" + (item.isActive ? " active" : "")}>{item.name}</li>)}
        </ul>
        <button type="button" className="btn btn-primary">Add chart</button>
        <button type="button" className="btn btn-primary" onClick = {()=>setstate(!state)}data-bs-toggle="modal" data-bs-target="#exampleModal">
            Запустите демо модального окна
        </button>

        <div className={"modal fade" + (state ? ' show' : "")} style={state ? {display: 'block'} : null} id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Заголовок модального окна</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
                    </div>
                    <div className="modal-body">
                        ...
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={()=>setstate(!state)}>Закрыть</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Settings;