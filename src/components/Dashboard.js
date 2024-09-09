import React from 'react'
import TopNavigation from './TopNavigation'
import { useLocation } from 'react-router-dom'

function Dashboard() {

  let locationObj=useLocation();
    
return (
    <div className='dashboardDiv'>
        <TopNavigation/>

        <div className='welcomeDashboardDiv'>
        <p style={{fontSize:"1.3rem"}}>Hello <span style={{color:"darkred", fontSize:"1.9rem"}}>{locationObj && locationObj.state && locationObj.state.email ? locationObj.state.email : ""}</span> !</p>
        </div>

    </div>
  )
}

export default Dashboard
