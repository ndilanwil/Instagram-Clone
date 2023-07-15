import "./Post.css"
import React from 'react'
import MoreHorizIcon from "@mui/icons-material/MoreHoriz"
import {Avatar} from '@mui/material'
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline"
import TelegramIcon from "@mui/icons-material/Telegram"
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder"

export const Post = (props) => {
  return (
    <div className="post">
        <div className="post_header">
            <div className="post_header_author">
                <Avatar src={props.avatar} style={{marginRight: "10px"}}>
                    UN
                </Avatar>{" "}
                {props.username} • <span>&nbsp; {props.time}</span>
            </div> 
            <MoreHorizIcon />
        </div>
        <div className="post_image">
            <img src={props.imageUrl} alt="post" />
        </div>
        <div className="post_footer">
            <div className="post_footer_icon">
                <div className="post_icons_main">
                    <FavoriteBorderIcon className="postIcon" />
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
        </div>
    </div>
  )
}
