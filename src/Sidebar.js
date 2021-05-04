import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React from 'react';
import "./Sidebar.css";
import SidebarRow from './SidebarRow';
import {useStateValue} from './StateProvider';
function Sidebar() {
    const [{user},dispatch] = useStateValue();

    return (

        <div className="sidebar">
            <SidebarRow src={user.photoURL} title={user.displayName}/>
            <SidebarRow Icon={LocalHospitalIcon} title="Covid Relief"/>
            <SidebarRow Icon={EmojiFlagsIcon} title="Friends"/>
            <SidebarRow Icon={PeopleIcon} title="Messenger"/>
            <SidebarRow Icon={StorefrontIcon} title="Marketplace"/>
            <SidebarRow Icon={VideoLibraryIcon} title= "Videos"/>
            <SidebarRow Icon={ExpandMoreIcon} title="Marketplace"/>
            <SidebarRow/>
        </div>
    )
}

export default Sidebar;
