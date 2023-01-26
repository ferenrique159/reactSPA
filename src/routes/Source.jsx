import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../interfaceGrafica'

export const Souerce = () => {
  return (
    <>
      <Navbar/> 
      <div className="container">
        <Outlet />
      </div>   
      
    </>
    
  )
}
