import SideBar from '../../components/SideBar/SideBar'
import React, {useState} from 'react'
import './fund.css'


const Fund = () =>{

    const [isActive, setActive] = useState(false);
    
    const handleToggle = () =>{
        setActive(!isActive);
    }


    return(
        <div style={{backgroundColor: '#e5e5e5',}}>
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
                    
               
    
                   
                    
                    
                
                </div>
            </div>
        </div>
    )
}

export default Fund;