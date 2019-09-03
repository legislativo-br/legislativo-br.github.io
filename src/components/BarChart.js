import React from 'react';
import ReactApexChart from 'react-apexcharts';

export default class BarChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        plotOptions: {
          bar: {
            horizontal: false,
            dataLabels: {
              position: 'top'
            }
          }
        },
        dataLabels: {
          enabled: true,
          formatter: (val) => {
            return `${val} cadeiras`
          },
          style: {
            fontSize: '16px'
          }
        },
        xaxis: {
          categories: [ 'Quantidade de cadeiras ocupadas' ]
        },
        yaxis: {
          enabled: false
        },
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: val => `${val} cadeiras`
          }
        },
        legend: {
          show: true,
          position: 'top',
          horizontalAlign: 'center'
        },
        colors:['#34314D', '#F6B642']
      },
      series: [ ...props.series ]
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          height="350"
        />
      </div>
    );
  }
}
