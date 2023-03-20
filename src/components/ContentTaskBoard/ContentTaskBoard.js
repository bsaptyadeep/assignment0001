import React from 'react';
import PenIcon from '../../assets/pen_icon.png'
import './ContentTaskBoard.css';

const ContentTaskBoard = () => {
  return (
    <div className='content-top'>
        <div className='content-top-left'>
            <h1>Task Boards</h1>
            <img className='content-top-left-pen-image' src={PenIcon} height={18} alt="penicon" />
        </div>
        <div className='content-top-middle'>
            <ul>
                <li><div className='active-blue'>Timeline</div></li>
                <li>Calender</li>
                <li>Dashboard</li>
                <li>Progress</li>
                <li>Forms</li>
                <li>More</li>
            </ul>
        </div>
        <div className='content-top-right'>
            top
        </div>
    </div>
  )
}

export default ContentTaskBoard