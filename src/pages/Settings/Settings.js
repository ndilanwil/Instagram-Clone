import React from 'react'
import {Nav} from "../../components/navigation/Nav"

export const Settings = () => {
  return (
    <div className='homepage'>
      <div className="side_nav">
          <Nav />
      </div>
      <div className='settings_body'>
          <h1>Settings</h1>
          <div className='settings_form'>
              <form className='f'>
                <label>
                  Name
                </label><br/>
                <input type='text' /><br/>
                <label>
                  Description
                </label><br/>
                <textarea></textarea><br/>
                <label>
                  Change password ?
                </label><br/>
                <input type='text' /><br/><br/><br/><br/><br/>
                <label>
                  Enter password to confirm changes
                </label><br/>
                <input type='text' />
                <button type='submit' className='us'>UPDATE</button>
              </form>
          </div>
      </div>
    </div>
  )
}
