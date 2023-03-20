import React from 'react';
import BoardViewIcon from '../../assets/boardview_icon.png';
import ListViewIcon from '../../assets/listview_icon.png';
import './Menu.css';
import LockIcon from '../../assets/lock_icon.png';
import ArrowDown from '../../assets/arrow_down.png';
import TwitterIcon from '../../assets/twitter_icon.png';
import MenuRight1 from '../../assets/menu_right1.png';
import MenuRight2 from '../../assets/menu_right2.png';
import MenuRight3 from '../../assets/menu_right3.png';
import MenuRight4 from '../../assets/menu_right4.png';
import MenuRight5 from '../../assets/menu_right5.png';
import GreySearch from '../../assets/grey_search.png';

const Menu = () => {
  return (
    <div className='menu-container'>
      <div className='menu-left'>
        <div className='menu-left-board-view'>
          <img src={BoardViewIcon} height={18} alt="boardview icon" />
          <p>Board View</p>
        </div>
        <div className='menu-left-list-view'>
          <img src={ListViewIcon} height={12} alt="listview icon" />
          <p>List View</p>
        </div>
      </div>
      <div className='grey-divider'>

      </div>
      <div className='limited-access'>
        <img src={LockIcon} height={21} alt="lock icon" />
        <p>Limited Access</p>
        <img src={ArrowDown} height={7} alt="arrow down" />
      </div>
      <div className='grey-divider'>

      </div>
      <div className='limited-access'>
        <p>Owner</p>
        <img src={TwitterIcon} height={8} alt="twitter icon" />
        <div className='twitter-team'>
          <p>Twitter Team</p>
        </div>
      </div>
      <div className='menu-input'>
        <div className='content-top-left-input-left'>
          <img src={GreySearch} height={18} alt="search" />
          <p>Search Tasks</p>
        </div>
      </div>
      <div className='menu-right-icons'>
        <div className='menu-icon-container'>
          <img src={MenuRight1} height={20} alt="menu icon 1" />
        </div>
        <div className='menu-icon-container'>
          <img src={MenuRight2} height={20} alt="menu icon 2" />
        </div>
        <div className='menu-icon-container'>
          <img src={MenuRight3} height={20} alt="menu icon 3" />
        </div>
        <div className='menu-icon-container'>
          <img src={MenuRight4} height={20} alt="menu icon 4" />
        </div>
        <div className='menu-icon-container'>
          <img src={MenuRight5} height={20} alt="menu icon 5" />
        </div>
      </div>
    </div>
  )
}

export default Menu