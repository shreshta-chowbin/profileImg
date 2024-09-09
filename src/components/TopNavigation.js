import React from 'react'
import { NavLink } from 'react-router-dom'

function TopNavigation() {
  return (
      <div className='topNavigation'>
        <NavLink to='/dashboard' 
        style={(obj)=>{
          console.log(obj);

          if(obj.isActive===true)
          {
            return{fontSize:"1.2rem", color:"red", textDecoration:"none"}
          }
        }}>Dashboard</NavLink>

        <NavLink to='/interForm'
        style={(obj)=>{

          if(obj.isActive===true)
          {
            return{fontSize:"1.2rem", color:"red", textDecoration:"none"}
          }
        }}
        >Inter Form</NavLink>

        <NavLink to='/stuDetails'
        style={(obj)=>{

          if(obj.isActive===true)
          {
            return{fontSize:"1.2rem", color:"red", textDecoration:"none"}
          }
        }}
        >Personal Data</NavLink>

        <NavLink to='/'>LogOut</NavLink>
        </div>
  )
}

export default TopNavigation
