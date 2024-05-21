import React from 'react'
import UserProfile from "../pages/UserProfile/UserProfile"
import Home from '../pages/home/Home'
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"
import Sidebar from './LeftSideBar/Sidebar'
import Dashboard from './Dashboards/Dashboard'


function AllRoutes() {
  return (
    <Routes>
       <Route path='/' element={<Home/>}/> 
       <Route path={'/userprofile'} element={<UserProfile/>}/> 
       <Route path={'/dashboard'} element={<Dashboard/>}/> 

    </Routes>
  )
}

export default AllRoutes
