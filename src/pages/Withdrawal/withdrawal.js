import SideBar from '../../components/SideBar'
import React, {useState} from 'react'


const Withdrawal = () =>{

    const [isActive, setActive] = useState(false);
    
    const handleToggle = () =>{
        setActive(!isActive);
    }


    return(
        <div style={{backgroundColor: '#e5e5e5'}}>
        <SideBar />
            <div className="main">
                <div className="contain">

                    {/* swicth between the users and markteters tab */}
                    <div className="mt-3 title-div" style={{display: 'flex'}}>
                        <div onClick={handleToggle} className={isActive ? "title-heading" : "title-heading active-div"}  style={{flex: 1}}>
                            <h5 className="text-center mb-0">User</h5>
                        </div>
                        <div onClick={handleToggle} className={isActive ? "title-heading marketers-div" : "title-heading"} style={{flex: 1,}}>
                            <h5 className="text-center mb-0">Marketer</h5>
                        </div>
                    </div>

                    {/* requests tab */}
                    <div className="text-center">
                        <div className="filter-div mx-auto mt-5">
                        <div className="filter-tab active-filter">   
                            <p className="mb-0">Today</p>
                        </div>
                        <div className="filter-tab">   
                            <p className="mb-0">This week</p>
                        </div>
                        <div className="filter-tab" >   
                            <p className="mb-0">Month</p>
                        </div>
                        <div style={{padding: '10px 30px'}}>   
                            <p className="mb-0 text-center">Year</p>
                        </div>
                      </div>
                    </div>
                    
                
                </div>
            </div>
        </div>
    )
}

export default Withdrawal;