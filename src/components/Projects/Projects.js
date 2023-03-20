import React from 'react';
import ArrowUp from '../../assets/arrow_up.png';
import './Projects.css';
import { data } from '../../data';
import ListCard from '../ListCard/ListCard';

const Projects = () => {
    const projects = data["projects"];
    //console.log(dashboards);
    return (
        <div className='projects'>
            <div className='project-head'>
                <p>PROJECTS</p>
                <img src={ArrowUp} height={7} alt="arrow up" />
            </div>
            <div className='project-list'>
                <ListCard data={projects} />
            </div>
        </div>
    )
}

export default Projects