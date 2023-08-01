import Chart from "react-apexcharts";
import './index.css'


const CreditDebitChart = (props) => {

    const {lastSevenDays} = props
      const dateList = lastSevenDays.map(each => each.date)
        const creditList = lastSevenDays.map(each => each.totalCredit)
        const debitList = lastSevenDays.map(each => each.totalDebit)
        const savingsList = lastSevenDays.map(each => each.totalCredit - each.totalDebit)


      const series = [{
        name: 'Credit',
        type: 'column',
        data: creditList
      }, {
        name: 'Debit',
        type: 'column',
        data: debitList
      }, {
        name: 'Savings',
        type: 'line',
        data: savingsList
      }]
    
      const options = {
        chart: {
          height: 350,
          type: 'line',
          stacked: false
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: [1, 1, 4]
        },
        title: {
          text: 'Savings Analysis last Week',
          align: 'left',
          offsetX: 110
        },
        xaxis: {
          categories: dateList,
        },
        yaxis: [
          {
            axisTicks: {
              show: true,
            },
            axisBorder: {
              show: true,
              color: '#008FFB'
            },
            labels: {
              style: {
                colors: '#008FFB',
              }
            },
            title: {
              text: "Credit (Thousands)",
              style: {
                color: '#008FFB',
              }
            },
            tooltip: {
              enabled: true
            }
          },
          {
            seriesName: 'Credit',
            opposite: true,
            axisTicks: {
              show: true,
            },
            axisBorder: {
              show: true,
              color: '#00E396'
            },
            labels: {
              style: {
                colors: '#00E396',
              }
            },
            title: {
              text: "Debit (Thousands)",
              style: {
                color: '#00E396',
              }
            },
          },
          {
            seriesName: 'Savings',
            opposite: true,
            axisTicks: {
              show: true,
            },
            axisBorder: {
              show: true,
              color: '#FEB019'
            },
            labels: {
              style: {
                colors: '#FEB019',
              },
            },
            title: {
              text: "Savings (Thousands)",
              style: {
                color: '#FEB019',
              }
            }
          },
        ],
        theme: {
            mode: 'light', 
            palette: 'palette1', 
            monochrome: {
                enabled: false,
                color: '#255aee',
                shadeTo: 'light',
                shadeIntensity: 0.65
            },
        },
        tooltip: {
          fixed: {
            enabled: true,
            position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
            offsetY: 30,
            offsetX: 60
          },
        },
        legend: {
          horizontalAlign: 'left',
          offsetX: 40
        }
      }

      return (
        <div className="bank-app-chart-main">

        <div id="chart" className="bank-app-chart-container">
            <Chart options={options} series={series} type="line" height={350} width={750} />
        </div>
        </div>)
}

export default CreditDebitChart