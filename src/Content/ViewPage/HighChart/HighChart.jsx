import Highcharts from 'highcharts'
import HighchartsReact from "highcharts-react-official";
import { useSelector } from 'react-redux';

function HighChart({chart}){
    const data = useSelector(state => state.content.data);
    const chartList = useSelector(state => state.content.chartList);

    return  <HighchartsReact
    highcharts={Highcharts}
    options={{
      title: {
        text: chart.name
      },
      series: [{
        data: data.map(i => i[chart.nameEn])
      }],
      colors: [chart.color],
      xAxis: {
        categories: chartList.map((item,index)=>index+1)
    },
    chart: {
      type: chart.type
  },
    }}
  />
}

export default HighChart;