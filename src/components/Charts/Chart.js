import {Line} from 'react-chartjs-2'
import './Chart.css'
import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {ChartRequest} from "../../store/actions/dashboardActions";

const Chart = (props) =>{

  const {graphData, getChartData, chartDayData, chartDate, ToggleDay} = props


  //  Get all funding data
   useEffect(() =>{
    const values = {
        time: 'today',
        user: 'INVESTOR',
        type: 'funding'
    }
    getChartData(values)
  },[getChartData,])

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

      const data = {
        labels: graphData.map(({createdAt})=> createdAt),
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
                  type: 'funding'     //this is what changes or been manipulated
            }
            getChartData(values)
            break;
          case "week":
              // time,user and type is subject to change
             values = {
              time:  value,
              user: 'INVESTOR',
              type: 'in_flow'
            }
            getChartData(values)
           break;
           case "month":
              values = {
                  time:  value,
                  user: 'INVESTOR',
                  type: 'out_flow'
                }
                getChartData(values)
               break;
           case "year":
              values = {
                  time:  value,
                  user: 'INVESTOR',
                  type: 'active_users'
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
      chartDate: state.dashboard.chartDate
  };
};

const mapDispatchToProps = (dispatch) => {
return {
  getChartData: (value) => dispatch(ChartRequest(value)),
  ToggleDay:  (value) => dispatch({ type: "ToggleChartDay", data: value })
 };
};



export default connect(mapStateToProps, mapDispatchToProps)(Chart)