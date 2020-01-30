import React, { Component } from 'react';
import classes from './Content.module.css';




const Content = () => {
    return <div className='content'>
            <img className='contImg' src='https://www.ionos.co.uk/digitalguide/fileadmin/DigitalGuide/Teaser/code-editoren-t.jpg' alt='' />
            <div >My content</div>
            <div>PhotoResume</div>
            <div><img className='iam' src="https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/p720x720/38750848_1766607000082271_3474720428994330624_o.jpg?_nc_cat=109&_nc_ohc=g7IYzrODo14AX-WdvL7&_nc_ht=scontent-amt2-1.xx&_nc_tp=1002&oh=c75dfbe948fdfd3c56e93409c2a1d93e&oe=5E9748F7" alt='' />
                <div>Resume</div>
            </div>
            <div className ='projects'>
                <div className='item'>Project1</div>
                <div className='item'>Project2</div>
                <div className='item'>Project3</div>
                <div className='item'>Project4</div>
            </div>    
        </div>               
}

export default Content;
