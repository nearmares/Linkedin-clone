import React, { useState, useEffect } from 'react'
import'./Feed.css'
import CreateIcon from '@material-ui/icons/Create'
import ImageIcon  from '@material-ui/icons/Image'
import InputOption from './InputOption'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import EventNoteIcon from '@material-ui/icons/EventNote'
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay'
import Post from './Post'
import { db } from './firebase'
import firebase from 'firebase'
import { selectUser } from './features/userSlice'
import { useSelector } from 'react-redux'
// react-flip-move
import FlipMove from 'react-flip-move'

function Feed() {
  const [ input, setInput ] = useState('')
  const [ posts, setPosts ] = useState([])

  const user = useSelector(selectUser)
  
  //connect to firebase database 
  useEffect( () => {

    //update de state of the posts everytime a post is added
    db.collection('posts')
      .orderBy('timestamp', 'desc')
      .onSnapshot(snapshot => (
        setPosts(
          snapshot.docs.map( doc =>(
            {
              id: doc.id,
              data:doc.data(),
            }
          ))
      )
      ))
  }, [])

  const sendPost = e => {
    e.preventDefault();

    //this is like the model
    db.collection('posts').add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })

    setInput('');
  };

  return (
    <div className='feed'>
      <div className='feed__inputContainer'>
        <div className='feed__input'>
          <CreateIcon />

          <form>
            <input value={input} onChange={e => setInput(e.target.value)} type="text" />
            <button onClick={sendPost} type='submit'>Send</button>
          </form>

        </div>

        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title='Photo' color='#70B5F9'/>
          <InputOption Icon={SubscriptionsIcon} title='Video' color='#e7a33e'/>
          <InputOption Icon={EventNoteIcon} title='Event' color='#C0CBCD'/>
          <InputOption Icon={CalendarViewDayIcon} title='Write Article' color='#7FC15D'/>
        </div>

      </div>

    {/* RENDERING POSTS WITH react-flip-move */}
    <FlipMove>

      { posts.map( ({ id, data: { name, description, message, photoUrl } }) => (
        <Post
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
        />
      ))}

    </FlipMove>

    </div>
  )
}

export default Feed
