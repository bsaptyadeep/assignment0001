import React from 'react';
import Progress from '../../assets/Progress.png';
import Progress1 from '../../assets/Progress-1.png';
import Avatar from '../../assets/Avatar.png';
import UserArrow from '../../assets/user_arrow.png';
import './UserCard.css';

const UserCard = () => {
  return (
    <div className='user'>
        <div className='user-image'>
            <img className='user-avatar' width={40} src={Avatar} alt="Avatar" />
            <img src={Progress} width={50} alt="Avatar" />
            <img src={Progress1} width={50} alt="Avatar" />
        </div>
        <div className='user-name'>
            <p>Nancy Martino</p>
            <p className='user-designation'>Designer</p>
        </div>
        <div className='user-arrow-image'>
            <img src={UserArrow} height={17} alt='user arrow' />
        </div>
    </div>
  )
}

export default UserCard