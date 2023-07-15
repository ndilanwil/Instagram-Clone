import "./Timeline.css"
import {Suggestion} from "../suggestion/Suggestion"
import {Post} from "../posts/Post"
import { useEffect, useState } from "react"
import { db } from "../../firebase"

export const Timeline = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => doc.data()))
    })
  }, []);
  return (
    <div className='timeline'>
      <div className='timeline_left'>
        <div className="timeline_posts">
            <Post />
            <Post />
            <Post />
            <Post />
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
