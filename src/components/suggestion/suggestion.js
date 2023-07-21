import React, { useState } from 'react'
import { Avatar } from '@mui/material'
import "./Suggestion.css"
import { useNavigate} from "react-router-dom";

export const Suggestion = (props) => {
  const navigate = useNavigate()

  const goProfile = async (e) => {
    console.log(props.name)
    localStorage.setItem("profile", props.name)
    navigate("/profile")
  };
  return (
    <div className="suggestions">
      <div className="suggestions__usernames">
        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>D</Avatar>
            </span>
            <div className="username__info">
              <span className="username">{props.name}</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button onClick={goProfile} className="follow__button">See profile</button>
        </div>
      </div>
    </div>
  )
}
