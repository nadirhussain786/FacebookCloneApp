import { Avatar } from '@material-ui/core';
import React from 'react';
import "./Story.css";
const Story = ({image , profile , title}) => {
  return (
    <div style={{backgroundImage:`url( ${image} )`}} className='story'>
    <Avatar className='storyAvatar' src={profile}/>
    <h4>{title}</h4>
    
    </div>
  )
}

export default Story;