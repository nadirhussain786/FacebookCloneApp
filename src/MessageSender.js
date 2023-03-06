import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import "./MessageSender.css";
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

const MessageSender = () => {
    const[input , setInput]= useState("");
    const[imageURL , setImageURL] = useState("");
    const handleSubmit = (e)=>{
        e.preventDefault();

        //some clever db staff

        setInput("");
        setImageURL("");
    };
  return (
    <div className='message_sender'>
    <div className='message_sender_top'>
    <Avatar />
    <form>
    <input value={input} onChange={(e)=>setInput(e.target.value)}
     className='message_sender_input' placeholder="What's on your mind, Emma?"/>
    <input value={imageURL} onChange={(e)=> setImageURL(e.target.value)}  placeholder="Image URL (Optional)"/>
    <button type='submit' onClick={handleSubmit}>submit</button>
    </form>
    
    </div>
    <div className='message_sender_bottom'>

    <div className='message_sender_option'>

    <VideocamIcon style={{color:"red"}} /> 
    <h4>Live Video</h4>

    </div>
    <div className='message_sender_option'>
    
    <PhotoLibraryIcon style={{color:"green"}} />
    <h4>Photo/Video</h4>
    
    </div>
    <div className='message_sender_option'>
    
    <InsertEmoticonIcon style={{color:"orange"}} />
    <h4>Feeling/Activity</h4>
    
    </div>
    
    </div>
    
    </div>
  )
}

export default MessageSender;