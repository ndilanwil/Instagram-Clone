import "./Post.css"
import React, { useEffect, useState } from 'react'
import MoreHorizIcon from "@mui/icons-material/MoreHoriz"
import {Avatar} from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline"
import TelegramIcon from "@mui/icons-material/Telegram"
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder"
import { db } from "../../functions/firebase"
import { collection, addDoc, doc, serverTimestamp, onSnapshot, updateDoc  } from "firebase/firestore";
import { useNavigate} from "react-router-dom";
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'

export const Post = (props) => {
    const navigate = useNavigate()
    const [showPicker, setShowPicker] = useState(false);
    const [active, setActive] = useState(false)
    const [da, setDa] = useState("")
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);
    const handleEmojiClick = (emoji) => {
        setComment(comment + emoji.native);
      };
    const handleClick = async () => {
        setActive(!active)
        localStorage.setItem("active", !active)
        if(localStorage.getItem("active")===true){
            const docRef = doc(db, "posts", props.post);
            try {
              await updateDoc(docRef, {
                likes: props.likes - 1,
              });
              console.log('Document updated successfully!');
            } catch (error) {
              console.error('Error updating document: ', error);
            }
        }
        else {
            const docRef = doc(db, "posts", props.post);
            try {
              await updateDoc(docRef, {
                likes: props.likes + 1,
              });
              console.log('Document updated successfully!');
            } catch (error) {
              console.error('Error updating document: ', error);
            }
        }
    };
    const addComment = async (e) => {
        e.preventDefault()
        const myDocumentRef = doc(db, "posts", props.post);
        const mySubcollectionRef = collection(myDocumentRef, "comments");
        const newDocRef = await addDoc(mySubcollectionRef, { 
            username: JSON.parse(localStorage.getItem("user")).username,
            content: comment,
            timestamp: serverTimestamp(),
        });
        console.log("New document added with ID: ", newDocRef.id);
        setComment("")
    };
    const goProfile = async (e) => {
        localStorage.setItem("profile", props.username)
        navigate("/profile")
    };

    useEffect(() => {
        const date = new Date(props.time); // Convert the string to a Date object
        const now = new Date(); // Get the current date and time
        const diffInMs = now.getTime() - date.getTime(); // Calculate the difference in milliseconds
        const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24)); // Convert to days and round down
        if(isNaN(diffInDays)){
            setDa(0)
        }else{
            setDa(diffInDays)
        }
        const test = JSON.parse(localStorage.getItem('active'));
        setActive(test)
        const collectionRef = collection(doc(db, "posts", props.post), 'comments');
        const unsubscribe = onSnapshot(collectionRef, (querySnapshot) => {
          const newData = querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id
          }));
          setComments(newData);
        });
    
        return () => unsubscribe();
      }, []);

  return (
    <div className="post">
        <div className="post_header">
            <div onClick={goProfile} className="post_header_author">
                <Avatar src={props.avatar} style={{marginRight: "10px"}}>
                    {props.username}
                </Avatar>{" "}
                {props.username} • <span>&nbsp; {da}j</span>
            </div> 
            <MoreHorizIcon />
        </div>
        <div className="post_image">
            <img src={props.imageUrl} alt="post" />
        </div>
        <div className="post_footer">
            <div className="post_footer_icon">
                <div className="post_icons_main">
                    <FavoriteIcon onClick={handleClick}
                        style={{ color: active ? "red" : "white" }} className="postIcon" />
                    <ChatBubbleOutlineIcon className="postIcon" />
                    <TelegramIcon className="postIcon" />

                </div>
                <div className="post_icon_save">
                    <BookmarkBorderIcon className="postIcon"/>
                </div>
            </div>
            Like by {props.likes} people.
        </div>
        <div className="post_comments">
            <strong>{props.username}</strong> {props.caption}
            {
                comments.map((comment) => 
                     (<div><strong>{comment.username}</strong> {comment.content}</div>)
                )
            }
        </div>
        <br/>   
        <form className="post_form">
            <input className="post_input" value={comment} type="text" placeholder="Add a comment" onChange={(e) => setComment(e.target.value)}/>
            <button className='buttonEmoji' onClick={(e) => {e.preventDefault();console.log(showPicker); setShowPicker(!showPicker);
                console.log(showPicker)}}>😀</button>
                      {showPicker && <Picker data={data} onEmojiSelect={handleEmojiClick} />}
            <button onClick={addComment} className="post_button" type='submit' style={{display: "none"}}>Add</button>
        </form>
    </div>
  )
}
