import "./Timeline.css"
import {Suggestion} from "../suggestion/Suggestion"
import {Post} from "../posts/Post"
import { useEffect, useState } from "react"
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../../functions/firebase';
import { getAllUsers } from "../../functions/getAllUsers"

export const Timeline = () => {
  const [posts, setPosts] = useState([])
  const [users, setUsers] = useState([])

  

  useEffect(() => {
    const collectionRef = collection(db, 'posts');
    const unsubscribe = onSnapshot(collectionRef, (querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id
      }));
      setPosts(newData);
    });
    console.log(users)
    return () => unsubscribe();
  }, []);
  useEffect(() => {
    async function getData(){
        const result = await getAllUsers();
        setUsers(result)
    }
    getData()
  }, []);
  return (
    <div className='timeline'>
      <div className='timeline_left'>
        <div className="timeline_posts">
          {
            posts.map((post, key) => {
              return <Post key={post.id}
                    post={post.id}
                    avatar={post.avatar} 
                    username={post.username} 
                    time={new Date(post.time.seconds * 1000).toLocaleString()} 
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
          {users.map(user => {
            return <Suggestion name={user.username}/>
          })}
      </div>
    </div>
  )
}
