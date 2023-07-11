import "./Timeline.css"
import {Suggestion} from "../suggestion/Suggestion"
import {Post} from "../posts/Post"

export const Timeline = () => {
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
        <Suggestion />
      </div>
    </div>
  )
}
