import React from 'react';
import Logo from './logo.png';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import FlagIcon from '@material-ui/icons/Flag';
import {Avatar, IconButton} from "@material-ui/core";
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';

import GroupIcon from '@material-ui/icons/Group';
import {useStateValue} from './StateProvider';
function Header() {

    const [{user},dispatch] = useStateValue();


    return (
        <div className="header">
            <div className="header__left">
               {/*burger button*/} 
               <img 
                    src={Logo} alt="logo"/>
               <div className="header__input">
               <SearchIcon/>
               <input placeholder="Search blog"type="text"></input>  
               </div>
               
            </div>
            <div className="header__center">
            <div className="header__option">
               <NotificationsActiveIcon/>
               </div>
               <div className="header__option">
               <ForumIcon/>
               </div>
               <div className="header__option">
               <GroupIcon/>
               </div>
               <div className="header__option">
               <FlagIcon/>
               </div>   
                
            </div>
            <div className="header__right">
                {/*Login*/} 
                <div className="header__info">
                <Avatar src={user.photoURL}/>
                <h4>{user.displayName}</h4>
                </div >          
            </div>
        </div>
    )
}

export default Header;
