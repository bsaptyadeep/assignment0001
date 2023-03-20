import React from 'react';
import './Content.css';
const ContentTaskBoard = React.lazy(() => import('../ContentTaskBoard/ContentTaskBoard')) 
const Menu = React.lazy(() => import('../Menu/Menu')) 
const Task = React.lazy(() => import('../Task/Task')) 
const ContentTop = React.lazy(() => import('../ContentTop/ContentTop')) 

const Content = () => {
  return (
    <div className='content'>
      <ContentTop />
      <ContentTaskBoard />
      <Menu />
      <Task />
    </div>
  )
}

export default Content