import React from 'react';
import './TaskCard.css';
import CheckIcon from '../../assets/check_icon.png';
import AttachmentIcon from '../../assets/attachment_icon.png';
import MessageIcon from '../../assets/message_icon.png';

const TaskCard = ({ task }) => {
    return (
        <div className='task-card'>
            <div className='first-line'>
                <p>{task?.title}</p>
                {
                    task.check ? (
                        <div className='card-right'>
                            <img src={CheckIcon} height={16} alt="checked icon" />
                            <p className='attachment-count'>{task.check}</p>
                        </div>
                    ) : (<div></div>)
                }
            </div>
            <div className='second-line'>
                <p className='card-color'>{task.color}</p>
                {task.design ? (<p className='card-design'>Design</p>) : (<div></div>)}
                {task.backlog ? (<p className='card-backlog'>Backlog</p>) : (<div></div>)}
                {task.development ? (<p className='card-development'>Development</p>) : (<div></div>)}
                {task.project ? (<p className='card-project'>Project</p>) : (<div></div>)}
                {task.todo ? (<p className='card-todo'>To Do</p>) : (<div></div>)}
                {task.inProcess ? (<p className='card-in-process'>In Process</p>) : (<div></div>)}
                {task.done ? (<p className='card-done'>done</p>) : (<div></div>)}
            </div>
            <div className='third-line'>
                {
                    task.attachment ? (
                        <div className='task-attachment'>
                            <img src={AttachmentIcon} height={16} alt="attachment icon" />
                            <p>{task.attachment}</p>
                        </div>
                    ) : (<div></div>)
                }
                {
                    task.message ? (
                        <div className='task-message'>
                            <img src={MessageIcon} height={16} alt="message icon" />
                            <p>{task.message}</p>
                        </div>
                    ) : (<div></div>)
                }
            </div>
        </div >
    )
}

export default TaskCard