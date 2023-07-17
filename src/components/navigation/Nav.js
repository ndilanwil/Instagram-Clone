import React, { useState } from 'react'
import "./Nav.css"
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import SendIcon from '@mui/icons-material/Send';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from "react-router-dom";
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { addPost } from "../../functions/addPost"

export const Nav = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false)
  const [image, setImage] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [caption, setCaption] = useState('');
  const toggleOverlay = () => {
    setOpen(!open);
  };
  const logout = () => {
    navigate("/login")
  };
  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
      const imageUrl = URL.createObjectURL(e.target.files[0]);
      setImageUrl(imageUrl);
    }
  };
  const handleUpload = async (e) => {
    const storageRef = ref(getStorage(), `${image.name}`);
    await uploadBytes(storageRef, image);
    getDownloadURL(storageRef).then((url) => addPost(e, caption, url))
    setOpen(false)
    localStorage.setItem("yeah", storageRef)
  };
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

        <button onClick={toggleOverlay} className='side_button'>
          <AddCircleOutlineIcon />
          <span>Create</span>
        </button>
        <button onClick={logout} className='side_button'>
          <LogoutIcon />
          <span>Logout</span>
        </button>

      </div>
      
      <div className='side_more'>
        <button onClick={() => navigate("/settings")} className='side_button'>
          <MenuIcon />
          <span>Settings</span>
        </button>
      </div>
    </div>
    {open && 
      <div className="addPost">
        <input type="file" id="file-input" onChange={handleImageChange}/>
        <label for="file-input" id="file">Select an Image</label>
        {image && <div className='div'><img src={imageUrl} alt="imae" /></div>}
        <input type="text" placeholder="Add a caption" onChange={(e) => setCaption(e.target.value)}/>
        <button onClick={handleUpload} type="submit">Publish</button>
      </div>
    }
    </div>
  )
}
