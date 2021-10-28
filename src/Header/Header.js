import React from 'react';
import './Header.css';
// Import search icon for header__left
import SearchIcon from '@material-ui/icons/Search';
//import icons for header__middle
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon  from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
// Import Avatar and icon button functionality for header__right
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStateValue } from '../StateProvider';

function Header() {
    const [{user}, dispatch] = useStateValue();

    return (
        <div className="header">
            <div className="header__left">
             <img 
              src="https://cdn3.iconfinder.com/data/icons/capsocial-round/500/facebook-1024.png" 
              alt="" ></img>
            </div> 
            <div className="header__input">
                <SearchIcon />
                <input 
                type="text"
                placeholder="Search Facebook" 
                />
            </div> 
            
            <div className="header__center">
                <div className="header__option
                 header__option--active">
                    <HomeIcon fontsize="large" />
                </div>
                <div className="header__option">
                    <FlagIcon fontsize="large" />
                </div>    
                <div className="header__option">
                    <SubscriptionsOutlinedIcon fontsize="large" />
                </div>
                <div className="header__option">
                    <StorefrontOutlinedIcon fontsize="large" />
                </div>
                <div className="header__option">
                    <SupervisedUserCircleIcon fontsize="large" />
                </div>
            </div>

            <div className="header__right">
                <div className="header__info">
                    <Avatar src={user.photoURL}/>
                    <h4>{user.displayName}</h4>
                </div>

                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon />
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>
            </div>
            
        </div>
    )
}

export default Header;
