import {Line} from 'react-chartjs-2'
import './Chart.css'
import React, {useState} from 'react'


const Chart = () =>{

  const [fund, setFund] = useState(1);

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

      const FundToggle = (id) =>{
        setFund(id)
     }
 

    const [fundData] = useState([
        { id: 1, name: 'tab-1', text: 'Today', value: '1' },
        { id: 2, name: 'tab-2', text: 'This Week', value: '2' },
        { id: 3, name: 'tab-3', text: 'Month', value: '3' },
        { id: 4, name: 'tab-4', text: 'Year', value: '4' },
    ])

    const funding = fundData.map((item)=>
    <div key={item.id}
        className={fund === item.id ? 'filter-tab active-filter' : 'filter-tab'}
        onClick={() => FundToggle(item.id)}
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

export default Chart