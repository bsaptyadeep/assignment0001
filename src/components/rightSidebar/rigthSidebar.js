import React from 'react';
import "./rightSidebar.css";
import CrossImage from "../../assets/cross_image.png";
import Avatar1 from '../../assets/Avatar-1.png';
import Avatar2 from '../../assets/Avatar-2.png';
import Avatar3 from '../../assets/Avatar-3.png';


const RigthSidebar = () => {
  return (
    <div className='right-sidebar'>
      <div className='right-sidebar-top'>
        <img src={CrossImage} height={13} alt="cross" />
      </div>

      <div className='right-sidebar-users'>
        <img src={Avatar1} height={32} alt="avatar 1" />
        <img src={Avatar2} height={32} alt="avatar 2" />
        <img src={Avatar3} height={32} alt="avatar 3" />
        <img src={Avatar1} height={32} alt="avatar 1" />
        <img src={Avatar2} height={32} alt="avatar 2" />
        <img src={Avatar3} height={32} alt="avatar 3" />
        <img src={Avatar1} height={32} alt="avatar 1" />
        <img src={Avatar2} height={32} alt="avatar 2" />
        <img src={Avatar3} height={32} alt="avatar 3" />
      </div>
    </div>
  )
}

export default RigthSidebar