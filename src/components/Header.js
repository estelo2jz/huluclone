import React from 'react';
import { Link } from 'react-router-dom';
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
      {/* --active */}
        <Link to="/home" className="header__icon header__icon">
          <HomeIcon />
          <p>Home</p>
        </Link>
        <Link to="/mystuff" className="header__icon">
          <FlashOnIcon />
          <p>My Stuff</p>
        </Link>
        <Link to="/tv" className="header__icon">
          <LiveTvIcon />
          <p>TV</p>
        </Link>
        <Link to="/movies" className="header__icon">
          <VideoLibraryIcon />
          <p>Movies</p>
        </Link>
        <Link to="/hubs" className="header__icon">
          <SearchIcon />
          <p>Hubs</p>
        </Link>
        {/* <Link to="/account" className="header__icon">
          <PersonOutlinedIcon />
          <p>Account</p>
        </Link> */}
      </div>
      <img src="https://www.hulu.com/static/hitch/s3/2020-08/Hulu_Logo-01_newgreen.png" alt="" />
    </div>
  )
}

export default Header
