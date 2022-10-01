import './ViewPage.scss'
import React from 'react'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { weatherApi } from './../../api/api';
import { setDataContent, toggleViewAccordion } from './../../store/actions';

function ViewPage() {
  const dispatch = useDispatch();
  const data = useSelector(state => state.content.data);
  const chartList = useSelector(state => state.content.chartList);
  const [countDay, setCountDay] = useState('7');
  useEffect(() => {
    !data.length ? weatherApi.getWeatherData('Moscow', countDay).then(res => dispatch(setDataContent(res))) : console.log();
  }, [])

  const toggleAccordion = (index) => dispatch(toggleViewAccordion(index))

  return <div className="viewPage">
    {chartList.map((item, index) => {
      return <React.Fragment key={index}>
        {item.isActive && <div className="accordion">
          <div className="accordion-item">
            <h2 className="accordion-header" onClick={() => toggleAccordion(index)}>
              <button className={"accordion-button" + (item.isView ? " collapsed" : "")} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                {item.name}
              </button>
            </h2>
            <div className={"accordion-collapse collapse" + (item.isView ? "" : "show")} aria-labelledby="panelsStayOpen-headingOne">
              <div className="accordion-body">
                <HighchartsReact
                  highcharts={Highcharts}
                  options={{
                    title: {
                      text: 'My chart'
                    },
                    series: [{
                      data: data.map(i => i[item.nameEn])
                    }],
                    colors: [item.color],
                  }}
                />
              </div>
            </div>
          </div>
        </div>}
      </React.Fragment>
    })}
            <label htmlFor="customRange2" className="form-label">Пример диапазона</label>
        <input type="range" className="form-range" min="0" max="5" id="customRange2" value={countDay} onChange={(e)=>setCountDay(e.target.value)} />
  </div>
}

export default ViewPage;