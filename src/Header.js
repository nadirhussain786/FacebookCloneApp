import React from 'react';
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import Home from '@material-ui/icons/Home';
import Flag from '@material-ui/icons/Flag';
import Subscriptions from '@material-ui/icons/Subscriptions';
import Storefront from '@material-ui/icons/Storefront';
import SupervisedUserCircle from '@material-ui/icons/SupervisedUserCircle';

import Add from '@material-ui/icons/Add';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { Avatar, IconButton } from '@material-ui/core';
import Forum from '@material-ui/icons/Forum';
import NotificationsActive from '@material-ui/icons/NotificationsActive';




function Header() {
  return (
   <>
   <div className='header'>
   <div className='header_left'>
   <img style={{borderRadius:"50px"}} src='https://www.facebook.com/images/fb_icon_325x325.png' alt='facebook logo'/>
   <div className='header_search'>
   <SearchIcon  />
   <input placeholder='Search Facebook' type="text" />
   </div>
   </div>
   <div className='header_middle'>
   <div className='header_optionctive header_option '>
   <Home  fontSize="large" />
   </div>
   <div className='header_option'>
   <Flag fontSize="large" />
   </div>
   <div className='header_option'>
   <Subscriptions fontSize="large" />
   </div>
   <div className='header_option'>
   <Storefront fontSize="large" />
   </div>
   <div className='header_option'>
   <SupervisedUserCircle fontSize="large" />
   </div>
   </div>
   <div className='header_right'>
   <div className='header_info'>
  
  
   <Avatar  fontSize="large"/>
   
   <h4>Emma</h4>
   </div>
   <IconButton>
   <Add fontSize="large" />
   </IconButton>
   <IconButton>
   <Forum fontSize="large" />
   </IconButton>
   <IconButton>
   <NotificationsActive fontSize="large" />
   </IconButton>
   <IconButton>
   <ExpandMore fontSize="large" />
   </IconButton>
   
   </div>
   
   </div>
   </>
  )
}

export default Header;