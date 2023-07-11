import React from 'react'
import { Avatar } from '@mui/material'
import "./Suggestion.css"

export const Suggestion = () => {
  return (
    <div className="suggestions">
      <div className="suggestions__usernames">
        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>D</Avatar>
            </span>
            <div className="username__info">
              <span className="username">Dilan</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>
      </div>
    </div>
  )
}
