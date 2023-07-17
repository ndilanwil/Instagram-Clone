import React, { useEffect, useState } from 'react'
import {Nav} from "../../components/navigation/Nav"
import {Avatar} from '@mui/material'
import GridOnIcon from '@mui/icons-material/GridOn';
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../functions/firebase";
import "./Profile.css"

export const Profile = () => {
  const [name, setName] = useState("")
  const [desc, setDesc] = useState("")
  const [avatar, setAvatar] = useState("")
  const [followers, setFollowers] = useState("")
  const [follows, setFollows] = useState("")
  useEffect( () => {
    const name = localStorage.getItem("profile")
    async function getData(){
      const usersRef = collection(db, "users");
      const q = query(usersRef, where("username", "==", name));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setName(doc.data().username)
        setDesc(doc.data().descripion)
        setAvatar(doc.data().avatar)
        setFollowers(doc.data().followers)
        setFollows(doc.data().follows)
        console.log(doc.id, " => ", doc.data());
      });
    }
    getData()
  }, []);
  return (
    <div className='profile'>
      <div className="side_nav">
          <Nav />
      </div>
      <div className='profile_body'>
        <div className='profile_header'>
          <Avatar src={avatar} style={{height: 168, width: 168, marginTop: "40px"}}>
            {name}
          </Avatar>
          <div className='profile_header_left'>
              <div className='profile_header_left_header'>
                  <div className="una">{name}</div>
                  <button>Follow</button>
                  <button>Contact</button>
              </div>
              <div className='profile_header_left_middle'>
                  <span><b>5</b> publications</span>
                  <span><b>{followers}</b> followers</span>
                  <span><b>{follows}</b> follows</span>
              </div>
              <div className='profile_header_left_footer'>
                  {desc}
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
