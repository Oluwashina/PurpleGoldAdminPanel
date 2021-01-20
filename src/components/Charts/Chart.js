import {Line} from 'react-chartjs-2'
import './Chart.css'
// import React, {useState, useEffect} from 'react'


const Chart = () =>{


    const data = {
        labels: ['1', '2', '3', '4', '5', '6'],
        datasets: [
          {
            label: 'Amount',
            data: [12, 19, 3, 5, 2, 3],
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

    const lineChart = (
        <Line 
        data={data}
        options={options}
        />
    )


    return(
        <div className="line-div">
            {lineChart}
        </div>
    )
}

export default Chart