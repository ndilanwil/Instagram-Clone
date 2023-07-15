import React from 'react'
import {Nav} from "../../components/navigation/Nav"
import {Avatar} from '@mui/material'
import GridOnIcon from '@mui/icons-material/GridOn';

import "./Profile.css"

export const Profile = () => {
  return (
    <div className='profile'>
      <div className="side_nav">
          <Nav />
      </div>
      <div className='profile_body'>
        <div className='profile_header'>
          <Avatar style={{height: 168, width: 168, marginTop: "40px"}}>
            UN
          </Avatar>
          <div className='profile_header_left'>
              <div className='profile_header_left_header'>
                  <div className="una">Otacustom</div>
                  <button>Follow</button>
                  <button>Contact</button>
              </div>
              <div className='profile_header_left_middle'>
                  <span><b>5</b> publications</span>
                  <span><b>5</b> followers</span>
                  <span><b>5</b> follows</span>
              </div>
              <div className='profile_header_left_footer'>
                  This is the the description of my account<br/>
                  It is beautifully designed<br />
                  This is the the description of my account<br/>
                  It is beautifully designed
              </div>
          </div>
        </div>
        <div className='line'></div>
        <div className='publi'>
          <GridOnIcon />&nbsp;
          PUBLICATIONS
        </div>
        <div className='profile_posts'>
          <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="post" />
          <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="post" />
          <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="post" />
          <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="post" />
          <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="post" />
        </div>
      </div>
    </div>
  )
}
