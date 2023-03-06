import { Avatar } from '@material-ui/core';
import React from 'react';
import "./Post.css";
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import ShareIcon from '@material-ui/icons/Share';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Post({profile , username , timestamp , message , image}) {
  return (
    <div className='post'>
    <div className='post_top'>
    <Avatar src={profile} />
    <div className='post_info'>
    <h3>{username}</h3>
    <p>{timestamp}</p>
    </div>
    </div>
    <div className='post_bottom'>
    <p>{message}</p>
    </div>
    <div className='post_image'>
    <img src={image} alt="" />
    </div>
    <div className='post_options'>
    <div className='post_option'>
    <ThumbUpAltIcon />
    <p>Like</p>
    </div>
    <div className='post_option'>
    <ChatBubbleIcon />
    <p>Comment</p>
    </div>
    <div className='post_option'>
    <ShareIcon />
    <p>Share</p>
    </div>
    <div className='post_option'>
    <AccountCircleIcon />
    <ExpandMoreIcon />
    </div>
    
    </div>
    </div>
  )
}

export default Post;