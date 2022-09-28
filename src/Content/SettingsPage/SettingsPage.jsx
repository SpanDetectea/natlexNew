import './SettingsPage.scss'
import { useSelector } from 'react-redux';

function Settings() {
    const chartList = useSelector(state => state.content.chartList);
    return <div className="settings">
        <ul>
            {chartList.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
    </div>
}

export default Settings;