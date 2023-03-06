import React from 'react';
import "./Sidebar.css";
import SidebarRow from './SidebarRow';
import LocalHospital from '@material-ui/icons/LocalHospital';
import Flag from '@material-ui/icons/Flag';
import People from '@material-ui/icons/People';
import Chat from '@material-ui/icons/Chat';
import Storefront from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
function Sidebar() {
  return (
    
    <div className='SidebarRow'>
    <SidebarRow
    src="https://images.unsplash.com/photo-1583748493291-7938f0657681?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
    title="Emma"/>
    <SidebarRow Icon={LocalHospital} title="COVID-19 Information Center"/>
    <SidebarRow Icon={Flag} title="Pages"/>
    <SidebarRow Icon={People} title="Friends"/>
    <SidebarRow Icon={Chat} title="Messenger"/>
    <SidebarRow Icon={Storefront} title="Marketplace"/>
    <SidebarRow Icon={VideoLibraryIcon} title="Videos"/>
    <SidebarRow Icon={ExpandMoreIcon} title="Expand"/>
    
    </div>
    
   
  )
}

export default Sidebar;