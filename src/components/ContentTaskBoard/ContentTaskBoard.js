import React from 'react';
import PenIcon from '../../assets/pen_icon.png'
import './ContentTaskBoard.css';
import Avatar from '../../assets/Avatar.png';
import Avatar1 from '../../assets/Avatar-1.png';
import Avatar2 from '../../assets/Avatar-2.png';
import Avatar3 from '../../assets/Avatar-3.png';
import PlusGrey from '../../assets/plus_grey.png';

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
            <div className='pic-list'>
                <div className='content-top-right-1'>
                    <img src={Avatar} className="ava1" height={40} alt="avatar" />
                    <img src={Avatar1} className="ava2" height={40} alt="avatar 1" />
                    <img src={Avatar2} className="ava3" height={40} alt="avatar 2" />
                    <img src={Avatar3} className="ava4" height={40} alt="avatar 3" />
                    <div className='pic-number'><p>+5</p></div>
                </div>
                <img src={PlusGrey} height={40} alt="plus grey" />
            </div>

        </div>
    )
}

export default ContentTaskBoard