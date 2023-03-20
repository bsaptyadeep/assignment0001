import React from 'react';
import './ContentTop.css'
import GreySearch from '../../assets/grey_search.png';
import GreyBell from '../../assets/grey-bell.png';
import GreySend from '../../assets/grey-send.png';
import GreyMic from '../../assets/grey-mic.png';
import GreyFolder from '../../assets/grey-folder.png';
import Progress from '../../assets/Progress.png';
import Progress1 from '../../assets/Progress-1.png';
import Avatar from '../../assets/Avatar.png';

const ContentTop = () => {
    return (
        <div className='content-top bottom-border'>
            <div className='content-top-left'>
                <div className='content-top-left-input'>
                    <div className='content-top-left-input-left'>
                        <img src={GreySearch} height={18} alt="search" />
                        <p>Search Tasks</p>
                    </div>
                    <img src={GreySend} height={18} alt="grey-send" />
                </div>
                <img className='content-top-left-input-left-mic-img' src={GreyMic} height={18} alt="grey-mic" />
            </div>
            <div className='content-top-middle'>
                <ul>
                    <li><div className='active'>Dashboard</div></li>
                    <li>My Task</li>
                    <li>Reporting</li>
                    <li>Portfolios</li>
                    <li>Goals</li>
                </ul>
            </div>
            <div className='content-top-right'>
                <img src={GreyFolder} height={18} alt="grey-folder" />
                <img src={GreyBell} height={18} alt="grey-bell" />
                <div className='user-image'>
                    <img className='user-avatar' src={Avatar} alt="Avatar" />
                    <img src={Progress} alt="Avatar" />
                    <img src={Progress1} alt="Avatar" />
                </div>
            </div>
        </div>
    )
}

export default ContentTop