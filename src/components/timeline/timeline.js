import React from 'react'
import "./Timeline.css"
import {Suggestion} from "../suggestion/Suggestion"

export const Timeline = () => {
  return (
    <div className='timeline'>
      <div className='timeline_left'>Timeline</div>
      <div className='timeline_right'>
        <Suggestion />
      </div>
    </div>
  )
}
