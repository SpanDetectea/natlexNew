import './ViewPage.scss'
import React from 'react'
import {  useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { weatherApi } from './../../api/api';
import { toggleViewAccordion, updateChart } from './../../store/actions';

function ViewPage() {
  const dispatch = useDispatch();
  const data = useSelector(state => state.content.data);
  const chartList = useSelector(state => state.content.chartList);
  const [countDay, setCountDay] = useState('7');

  const toggleAccordion = (index) => dispatch(toggleViewAccordion(index))
  const setDataFromRange = (e) => {
    setCountDay(e.target.value)
    weatherApi.getWeatherData('Moscow', e.target.value).then(res => dispatch(updateChart(res)))
  }

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
                      text: item.name
                    },
                    series: [{
                      data: data.map(i => i[item.nameEn])
                    }],
                    colors: [item.color],
                    xAxis: {
                      categories: chartList.map((item,index)=>index+1)
                  },
                  chart: {
                    // renderTo: 'container',
                    type: item.type
                },
                  }}
                />
              </div>
            </div>
          </div>
        </div>}
      </React.Fragment>
    })}
            <label htmlFor="customRange2" className="form-label">number of days from 1 to 7</label>
        <input type="range" className="form-range" min="1" max="7" id="customRange2" value={countDay} onChange={(e)=> setDataFromRange(e)} />
  </div>
}

export default ViewPage;