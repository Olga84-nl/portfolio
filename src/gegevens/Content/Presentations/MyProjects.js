import React, { Component } from 'react';
import c from './MyProjects.module.css';
import Project from'./Project/Project';




const MyProjects = () => {
    return ( 
        <div> My projects
            <div> New project       
            </div>
              <div className ={c.projects}>
                <Project name='My first project'/>
                <Project name='Me seconde project'/>
                <Project name='My third project'/>


            </div>    
        </div>  
    )             
}

export default MyProjects;
