import React, { ForwardedRef } from 'react';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { registerables, Chart, Point, ChartData } from 'chart.js';
import { Line } from 'react-chartjs-2';

Chart.register(...registerables);

type WeatherChartT = {
  chartData: ChartData<'line', (number | Point | null)[], unknown>;
};

export default function WeatherChart({ chartData }: WeatherChartT) {
  return (
    <Line
      plugins={[ChartDataLabels]}
      data={chartData}
      options={{
        layout: {
          padding: 20,
        },
        elements: {
          line: {
            tension: 0.25,
          },
          point: {
            radius: 1,
          },
        },
        plugins: {
          datalabels: {
            display: true,
            color: '#fff',
            anchor: 'end',
            formatter: Math.round,
            offset: -25,
            align: 'start',
          },
          legend: {
            display: false,
          },
        },
        scales: {
          y: {
            ticks: {
              display: false,
            },
          },
        },
      }}
    />
  );
}
