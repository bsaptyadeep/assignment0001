import React from 'react';
import { data } from '../../data';
import './Task.css';
import ThreeDots from '../../assets/three-dots.png';
import TaskCard from '../TaskCard/TaskCard';
import PlusGrey from '../../assets/plus_grey.png'

const Task = () => {
  const tasks = data["tasks"];
  //console.log(tasks)

  return (
    <div className='tasks-container'>
      {
        tasks.map((task, index) => (
          <div key={Math.random()} className='task-container'>
            <div className='task-header'>
              <p>{task.title}<span className={`${task.maxTab}`}>{task.count}</span></p>
              <img src={ThreeDots} width={16} height={4} alt="three dots" />
            </div>
            <div className='task-list'>
              {
                task.list.map((card, it) => (
                  <TaskCard key={Math.random()} task={card} />
                ))
              }
            </div>
            <div className='task-footer'>
              <img src={PlusGrey} height={16} alt="plus grey" />
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Task