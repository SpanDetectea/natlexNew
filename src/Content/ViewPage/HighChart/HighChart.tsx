import React from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from "highcharts-react-official";
import { useTypedSelector } from '../../../Hooks/useTypedSelector/useTypedSelector';

export interface IHighChart {
    chart: {
      name: string;
      nameEn: string;
      color: string;
      type: string;
      isView?: boolean;
      isActive?: boolean;
    }
}
interface ICHartListNameProp {
  [key: string]: string;
}

function HighChart({chart}:IHighChart){
    const data = useTypedSelector(state => state.content.data);
    const chartList = useTypedSelector(state => state.content.chartList);
    return  <HighchartsReact
    highcharts={Highcharts}
    options={{
      title: {
        text: chart.name
      },
      series: [{
        data: data.map((i: ICHartListNameProp) => i[chart.nameEn])
      }],
      colors: [chart.color],
      xAxis: {
        categories: chartList.map((item: never,index: number)=>index+1)
    },
    chart: {
      type: chart.type
  },
    }}
  />
}

export default HighChart;