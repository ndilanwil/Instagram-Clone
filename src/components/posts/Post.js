import "./Post.css"
import React from 'react'
import MoreHorizIcon from "@mui/icons-material/MoreHoriz"
import {Avatar} from '@mui/material'
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline"
import TelegramIcon from "@mui/icons-material/Telegram"
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder"

export const Post = () => {
  return (
    <div className="post">
        <div className="post_header">
            <div className="post_header_author">
                <Avatar style={{marginRight: "10px"}}>
                    U
                </Avatar>{" "}
                user • <span>&nbsp; timestamp</span>
            </div>
            <MoreHorizIcon />
        </div>
        <div className="post_image">
            <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="post" />
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
            Like by 3 people.
        </div>
    </div>
  )
}
