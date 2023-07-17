import "./Timeline.css"
import {Suggestion} from "../suggestion/Suggestion"
import {Post} from "../posts/Post"
import { useEffect, useState } from "react"
import { fetchPost } from "../../functions/fetchPost"
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../functions/firebase"

export const Timeline = () => {
  const [posts, setPosts] = useState([])
  

  useEffect(() => {
    async function getData(){
    const result = await fetchPost();
    console.log(result[0].avatar)
    setPosts(result)
  }
     getData()
  }, []);
  return (
    <div className='timeline'>
      <div className='timeline_left'>
        <div className="timeline_posts">
          {
            posts.map((post) => {
              console.log(post)
              return <Post key={post.id}
                    avatar={post.avatar} 
                    username={post.username} 
                    time={post.time} 
                    imageUrl={post.imageUrl} 
                    likes={post.likes}
                    caption={post.caption}
              />
            })
          }
        </div>
      </div>
      <div className='timeline_right'>
      <div className="suggestions__title">Suggestions for you</div>
        <Suggestion />
        <Suggestion />
        <Suggestion />
        <Suggestion />
      </div>
    </div>
  )
}
