import React from 'react';
import "./Feed.css";
import MessageSender from './MessageSender';
import Post from './Post';
import StoryReel from './StoryReel';

const Feed = () => {
  return (
    <div className='feed'>
    <StoryReel /> 
    <MessageSender />
    <Post profile="https://images.unsplash.com/photo-1583748493291-7938f0657681?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
    username="Emma"
    timestamp="timestamp..."
    message="Today Workout"
    image="https://c4.wallpaperflare.com/wallpaper/500/442/354/outrun-vaporwave-hd-wallpaper-thumb.jpg" />
    
    <Post
    profile="https://images.unsplash.com/photo-1583748493291-7938f0657681?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
    username="Emma"
    message="Wow this Work"
    />
    
    </div>
    
  )
}

export default Feed;