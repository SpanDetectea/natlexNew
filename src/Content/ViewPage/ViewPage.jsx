import './ViewPage.scss'
import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { weatherApi } from './../../api/api';
import { setDataContent } from './../../store/actions';

function ViewPage() {
    const dispatch = useDispatch();
    const data = useSelector(state => state.content.data.forecast);
    useEffect(() => {
        weatherApi.getWeatherData().then(res => dispatch(setDataContent(res)));
    }, [])
    
    return <div className="viewPage">
        <HighchartsReact
            highcharts={Highcharts}
            options={{
                title: {
                  text: 'My chart'
                },
                series: [{
                  data: data?.forecastday.map(item => item.day.maxtemp_c)
                }]
              }}
        />
    </div>
}

export default ViewPage;