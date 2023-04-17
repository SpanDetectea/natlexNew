import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useTypedSelector } from "../../../Hooks/useTypedSelector/useTypedSelector";
import { Forecastday } from "../../../types/types";
import { IHighChart } from "../../../types/IHighChart";

function HighChart({ chart }: IHighChart) {
  const {
    forecastDays: data,
    dates,
    viewCount,
  } = useTypedSelector((state) => state.content);

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={{
        title: {
          text: chart.name,
        },
        series: [
          {
            data: data
              .map((i: Forecastday) => i.day[chart.nameEn])
              .filter((item, index) => index < viewCount),
          },
        ],
        colors: [chart.color],
        xAxis: {
          categories: [...dates],
        },
        chart: {
          type: chart.type,
        },
        accessibility: {
          enabled: false
        }
      }}
    />
  );
}

export default HighChart;
