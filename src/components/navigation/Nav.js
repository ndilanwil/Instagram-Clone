import React from 'react'
import "./Nav.css"
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import SendIcon from '@mui/icons-material/Send';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from "react-router-dom";

export const Nav = () => {
  const navigate = useNavigate();
  return (
    <div className='all'>
    <div className='nav'>
      <a href="/"><img className='nav_logo' src='https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png' alt='instagram' /></a>
      <div className='nav_buttons'>
        <button onClick={() => navigate('/')} className='side_button'>
          <HomeIcon />
          <span>Home</span>
        </button>
        
        <button className='side_button'>
          <SearchIcon />
          <span>Search</span>
        </button>

        <button className='side_button'>
          <ExploreIcon />
          <span>Discover</span>
        </button>

        <button className='side_button'>
          <SlideshowIcon />
          <span>Reels</span>
        </button>

        <button className='side_button'>
          <SendIcon />
          <span>Messages</span>
        </button>
        <button className='side_button'>
          <FavoriteBorderIcon />
          <span>Notifications</span>
        </button>

        <button className='side_button'>
          <AddCircleOutlineIcon />
          <span>Create</span>
        </button>

      </div>
      
      <div className='side_more'>
        <button onClick={() => navigate("/settings")} className='side_button'>
          <MenuIcon />
          <span>Settings</span>
        </button>
      </div>
    </div>
    </div>
  )
}
