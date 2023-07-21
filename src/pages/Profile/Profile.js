import React, { useEffect, useState } from 'react'
import {Nav} from "../../components/navigation/Nav"
import {Avatar} from '@mui/material'
import GridOnIcon from '@mui/icons-material/GridOn';
import { db } from "../../functions/firebase"
import { collection, addDoc, doc, onSnapshot, updateDoc, where, query, getDocs, deleteDoc  } from "firebase/firestore";
import "./Profile.css"

export const Profile = () => {
  const [name, setName] = useState("")
  const [publi, setPubli] = useState("")
  const [desc, setDesc] = useState("")
  const [avatar, setAvatar] = useState("")
  const [followers, setFollowers] = useState("")
  const [follows, setFollows] = useState("")
  const [id, setId] = useState("")
  const [te, setTest] = useState(false)
  const [tes, setTeste] = useState()
  const [posts, setPosts] = useState([])
  const handleClick = async () => {
    setTest(!te)
    localStorage.setItem("doFollow", !te)
    };
    const addFollow = async (e) => {
      setTeste(!tes)
      e.preventDefault()
      async function checkIfDocumentExists() {
        const q = query(
          collection(db, "follows"),
          where("who", "==", JSON.parse(localStorage.getItem('user')).id),
          where("to", "==", id)
        );
        const querySnapshot = await getDocs(q);
        return !querySnapshot.empty;
      }
      const docExist = await checkIfDocumentExists()
      console.log(docExist)
      setTeste(docExist)
      if(docExist){
        console.log("yesss")
        const q = query(
          collection(db, "follows"),
          where("who", "==", JSON.parse(localStorage.getItem('user')).id),
          where("to", "==", id),
        );
        const querySnapshot = await getDocs(q);
      
        querySnapshot.forEach((doc) => {
          deleteDoc(doc.ref);
        });
    console.log(JSON.parse(localStorage.getItem('user')).follows)
    const docRef = doc(db, "users", JSON.parse(localStorage.getItem('user')).id);
      try {
        await updateDoc(docRef, {
          follows: JSON.parse(localStorage.getItem('user')).follows - 1,
        });
        const test = JSON.parse(localStorage.getItem('user'))
        test.follows = JSON.parse(localStorage.getItem('user')).follows-1
        localStorage.setItem("user", JSON.stringify(test))
        console.log('Document updated successfully!');
      } catch (error) {
        console.error('Error updating document: ', error);
    }
    const docRf = doc(db, "users", id);
      try {
        await updateDoc(docRf, {
          followers: followers-1,
        });
        const test = JSON.parse(localStorage.getItem('user'))
        test.followers = followers-1
        localStorage.setItem("user", JSON.stringify(test))
        console.log('Document updated successfully!');
      } catch (error) {
        console.error('Error updating document: ', error);
    }
      }
      else{
        console.log("nooo")
        const mySubcollectionRef = collection(db, "follows");
    const newDocRef = await addDoc(mySubcollectionRef, { 
        who: JSON.parse(localStorage.getItem('user')).id,
        to: id  
    });
    console.log(JSON.parse(localStorage.getItem('user')).follows)
    const docRef = doc(db, "users", JSON.parse(localStorage.getItem('user')).id);
      try {
        await updateDoc(docRef, {
          follows: JSON.parse(localStorage.getItem('user')).follows + 1,
        });
        const test = JSON.parse(localStorage.getItem('user'))
        test.follows = JSON.parse(localStorage.getItem('user')).follows+1
        localStorage.setItem("user", JSON.stringify(test))
        console.log('Document updated successfully!');
      } catch (error) {
        console.error('Error updating document: ', error);
    }
    const docRf = doc(db, "users", id);
      try {
        await updateDoc(docRf, {
          followers: followers+1,
        });
        const test = JSON.parse(localStorage.getItem('user'))
        test.followers = followers+1
        localStorage.setItem("user", JSON.stringify(test))
        console.log('Document updated successfully!');
      } catch (error) {
        console.error('Error updating document: ', error);
    }
    console.log("New document added with ID: ", newDocRef.id);
    };
      }
  useEffect( () => {
    console.log(localStorage.getItem('doFollow'))
    const te = JSON.parse(localStorage.getItem('doFollow'));
    setTest(te)
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
        setId(doc.id)
        console.log(doc.id, " => ", doc.data());
      });
      async function checkIfDocumentExists() {
        const q = query(
          collection(db, "follows"),
          where("who", "==", JSON.parse(localStorage.getItem('user')).id),
          where("to", "==", id)
        );
        const querySnapshot = await getDocs(q);
        return !querySnapshot.empty;
      }
      const docExist = await checkIfDocumentExists()
      console.log(docExist)
      setTeste(docExist)
      console.log(tes)
    }
    getData()
  }, [tes])
  useEffect(() => {
      const collectionRef = collection(db, 'posts');
      const unsubscribe = onSnapshot(collectionRef, (querySnapshot) => {
        const newData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id
        }));
        const userPosts = newData.filter(post => post.username === localStorage.getItem("profile"));
        const postCount = userPosts.length; 
        setPubli(postCount);
        setPosts(newData);
      });
      return () => unsubscribe();
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
                  <button onClick={handleClick}>{tes ? <p onClick={addFollow}>Unfollow</p> : <p onClick={addFollow}>Follow</p>}</button>
                  <button>Contact</button>
              </div>
              <div className='profile_header_left_middle'>
                  <span><b>{publi}</b> publications</span>
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
        {
            posts.map((post, key) => {
              if(post.username === name){
                return <img src={post.imageUrl} alt="post" />
              }
            })
          }
        </div>
      </div>
    </div>
  )
}
