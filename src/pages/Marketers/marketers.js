import SideBar from "../../components/SideBar/SideBar";
import React, {useState} from 'react'
import './marketers.css'

function Marketers(){

    const [fund, setFund] = useState(1);
    
  
    const [fundData] = useState([
        { id: 1, name: 'tab-1', text: 'All', count: '53' },
        { id: 2, name: 'tab-2', text: 'Active', count: '36' },
        { id: 3, name: 'tab-3', text: 'Inactive', count: '12' },
        { id: 4, name: 'tab-4', text: 'Suspended', count: '5' },
    ])

    const FundToggle = (id) =>{
        setFund(id)
     } 

    
    const funding = fundData.map((item)=>
    <div key={item.id}
    style={{position: "relative"}}
        className={fund === item.id ? 'user-tab user-active' : 'user-tab'}
        onClick={() => FundToggle(item.id)}
        >   
         <div className={fund === item.id ? 'count-active': 'count'}>
            {item.count}
        </div>
        <p className="mb-0">{item.text}</p>
    </div>
    )


    return(
        <div style={{backgroundColor: '#f5f6f8', height: '100vh'}}>
             <SideBar />
             <div className="main">
                <div className="contain">


                    <div className="mt-4" style={{display: 'flex', justifyContent: 'center', alignItems:'center'}}>
                        <div className="chart-filter">
                                {funding}
                        </div>
                    </div>

                     {/* Data tables to be populated with all admin layout */}
              
                      



             </div>
         </div>
      </div>
    )
}

export default  Marketers;