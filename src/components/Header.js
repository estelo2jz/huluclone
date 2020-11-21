import React from 'react';

import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import PersonOutlinedIcon from '@material-ui/icons/PersonOutlined';

function Header() {
  return (
    <div className="header">
      <div className="header__icons">
      {/* putting div puts display: inline; */}
        <div className="header__icon header__icon--active">
          <HomeIcon />
          <p>Home</p>
        </div>
        <div className="header__icon">
          <FlashOnIcon />
          <p>Trending</p>
        </div>
        <div className="header__icon">
          <LiveTvIcon />
          <p>Verified</p>
        </div>
        <div className="header__icon">
          <VideoLibraryIcon />
          <p>Collections</p>
        </div>
        <div className="header__icon">
          <SearchIcon />
          <p>Search</p>
        </div>
        <div className="header__icon">
          <PersonOutlinedIcon />
          <p>Account</p>
        </div>
      </div>
      <img src="https://www.hulu.com/static/hitch/s3/2020-08/Hulu_Logo-01_newgreen.png" alt="" />
    </div>
  )
}

export default Header
