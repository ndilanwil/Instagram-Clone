import React from 'react'
import {Nav} from "../../components/navigation/Nav"
import { useState, useEffect } from 'react';
import { db } from "../../functions/firebase"
import {  doc, updateDoc  } from "firebase/firestore";
import Alert from '@mui/material/Alert';

export const Settings = () => {
  const [name, setName] = useState("")
  const [desc, setDesc] = useState("")
  const [password, setPassword] = useState("")
  const [alert, setAlert] = useState(false)
  const [alert2, setAlert2] = useState(false)
  const [newP, setNew] = useState("")
  const handleClick = async (e) => {
    e.preventDefault()
    console.log(name)
    if(password === JSON.parse(localStorage.getItem('user')).password){
      if(name!==""){
          const docRef = doc(db, "users", JSON.parse(localStorage.getItem('user')).id);
          try {
            await updateDoc(docRef, {
              username: name,
            });
            console.log('Document updated successfully!');
          } catch (error) {
            console.error('Error updating document: ', error);
          }
          const test = JSON.parse(localStorage.getItem('user'))
          test.username = name
          localStorage.setItem("user", JSON.stringify(test))
      }
      if(desc!==""){
          const docRef = doc(db, "users", JSON.parse(localStorage.getItem('user')).id);
          try {
            await updateDoc(docRef, {
              description: desc,
            });
            console.log('Document updated successfully!');
          } catch (error) {
            console.error('Error updating document: ', error);
          }
          const test = JSON.parse(localStorage.getItem('user'))
          test.description = desc
          localStorage.setItem("user", JSON.stringify(test))
      }
      if(newP!==""){
          const docRef = doc(db, "users", JSON.parse(localStorage.getItem('user')).id);
          try {
            await updateDoc(docRef, {
              password: newP,
            });
            console.log('Document updated successfully!');
          } catch (error) {
            console.error('Error updating document: ', error);
          }
          const test = JSON.parse(localStorage.getItem('user'))
          test.password = newP
          localStorage.setItem("user", JSON.stringify(test))
      }
      setAlert(true)
    }
    else {
      setAlert2(true)
    }
    }
  useEffect(() => {
    console.log(JSON.parse(localStorage.getItem('user')).id)
    const p =JSON.parse(localStorage.getItem('user')).password
    setPassword(p)
  }, []);
  return (
    <div className='homepage'>
      <div className="side_nav">
          <Nav />
      </div>
      <div className='settings_body'>
          <h1>Settings</h1>
          {alert &&
                <Alert variant="filled" severity="success" onClose={() => {setAlert(false)}}>
                    User Informations updated successfully
                </Alert>
            }
          {alert2 &&
                <Alert variant="filled" severity="error" onClose={() => {setAlert(false)}}>
                    You have entered a wrong password
                </Alert>
            }
          <div className='settings_form'>
              <form className='f'>
                <label>
                  Name
                </label><br/>
                <input type='text' onChange={(e) => setName(e.target.value)} /><br/>
                <label>
                  Description
                </label><br/>
                <textarea onChange={(e) => setDesc(e.target.value)}></textarea><br/>
                <label>
                  Change password ?
                </label><br/>
                <input type='text' onChange={(e) => setNew(e.target.value)} /><br/><br/><br/><br/><br/>
                <label>
                  Enter password to confirm changes
                </label><br/>
                <input type='text' onChange={(e) => setPassword(e.target.value)} required/>
                <button onClick={handleClick} type='submit' className='us'>UPDATE</button>
              </form>
          </div>
      </div>
    </div>
  )
}
