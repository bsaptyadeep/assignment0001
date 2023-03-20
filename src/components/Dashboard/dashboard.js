import React from 'react';
import ArrowUp from '../../assets/arrow_up.png';
import './dashboard.css';
import { data } from '../../data';
import ListCard from '../ListCard/ListCard';

const Dashboard = () => {
    const dashboards = data["dashboards"];
    //console.log(dashboards);
    return (
        <div className='dashboard'>
            <div className='dashboard-head'>
                <p>DASHBOARDS</p>
                <img src={ArrowUp} height={7} alt="arrow up" />
            </div>
            <div className='dashboard-list'>
                <ListCard data={dashboards}/>
            </div>
        </div>
    )
}

export default Dashboard