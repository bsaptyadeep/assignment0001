import React, { useState } from 'react';
import HeadImg from '../../assets/head_img.png';
import Dashboard from '../Dashboard/dashboard';
import Projects from '../Projects/Projects';
import UserCard from '../UserCard/UserCard';
import './leftSidebar.css';

const LeftSidebar = () => {

  const [flag, setFlag] = useState(false);

  return (
    <div className='left-sidebar'>
      <div className='left-sidebar-head'>
        <p>Dashboard</p>
        <img src={HeadImg} onClick={()=>{
          setFlag(!flag)
        }} height={12} alt="head"/>
      </div>
      <div className={`left-sidebar-content ${flag?"vanish":""}`}>
        <UserCard />
        <Dashboard />
        <Projects />
      </div>
    </div>
  )
}

export default LeftSidebar