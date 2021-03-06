import {Line} from 'react-chartjs-2'
import './Chart.css'
import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import Moment from 'moment';
import {ChartRequest} from "../../store/actions/dashboardActions";

const Chart = (props) =>{

  const {graphData, getChartData, chartDayData, chartDate, ToggleDay, cardActive} = props


  //  Get all funding data
   useEffect(() =>{
    const values = {
        time: 'today',
        user: 'INVESTOR',
        type: 'funding'
    }
    getChartData(values)
    ToggleDay(values.time)
  },[getChartData,ToggleDay])

    // const data = {
    //     labels: ['1', '2', '3', '4', '5', '6'],
    //     datasets: [
    //       {
    //         label: 'Amount',
    //         data: [12, 19, 3, 5, 2, 3],
    //         fill: false,
    //         backgroundColor: '#E79A26',
    //         borderColor: '#E79A26',
    //       },
    //     ],
    //   }

  const dateFormat = (date) =>{
    var dayShow;
    switch(chartDate){
        // today
        case "today":
            dayShow = 
              Moment(date).format('YYYY/MM/DD')
            break;
        case "week":
            // week
            dayShow = 
            Moment(date).format('dddd')
            break;
        case "month":
            // month
            dayShow = 
            Moment(date).format('MMMM Do')
            break;
        case "year":
            // year
            dayShow = 
            Moment(date).format('MMMM Do, YYYY')
            break;
        default:
            dayShow = ""
    }
     return dayShow;
  }

      const data = {
        labels: graphData.map(({createdAt})=> dateFormat(createdAt)),
        datasets: [
          {
            label: 'Amount',
            data: graphData.map(({amount})=> amount),
            fill: false,
            backgroundColor: '#E79A26',
            borderColor: '#E79A26',
          },
        ],
      }
    
      const options = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      }

      const FundToggle = (value) =>{
        ToggleDay(value)
        var values;
        switch(value){
          case "today":
              values = {
                  time: value,
                  user: 'INVESTOR',
                  type: cardActive     //this is what changes or been manipulated
            }
            getChartData(values)
            break;
          case "week":
              // time,user and type is subject to change
             values = {
              time:  value,
              user: 'INVESTOR',
              type: cardActive
            }
            getChartData(values)
           break;
           case "month":
              values = {
                  time:  value,
                  user: 'INVESTOR',
                  type: cardActive
                }
                getChartData(values)
               break;
           case "year":
              values = {
                  time:  value,
                  user: 'INVESTOR',
                  type: cardActive
                }
                getChartData(values)
               break;
           default:
               console.log("Today")
      }
     }
 


    const funding = chartDayData.map((item)=>
    <div key={item.id}
        className={chartDate === item.value ? 'filter-tab active-filter' : 'filter-tab'}
        onClick={() => FundToggle(item.value)}
        >   
        <p className="mb-0">{item.text}</p>
    </div>
    )

    const lineChart = (
        <Line 
        data={data}
        options={options}
        />
    )


    return(
        <div className="line-div">
            <div style={{display: 'flex', justifyContent: 'flex-end', alignItems:'center'}}>
                <div className="chart-filter">
                         {funding}
                </div>
            </div>
            {lineChart}
        </div>
    )
}




const mapStateToProps = (state) => {
  return {
      graphData: state.dashboard.chartData,
      chartDayData: state.dashboard.chartDayData,
      chartDate: state.dashboard.chartDate,
      cardActive: state.dashboard.cardActive
  };
};

const mapDispatchToProps = (dispatch) => {
return {
  getChartData: (value) => dispatch(ChartRequest(value)),
  ToggleDay:  (value) => dispatch({ type: "ToggleChartDay", data: value })
 };
};



export default connect(mapStateToProps, mapDispatchToProps)(Chart)