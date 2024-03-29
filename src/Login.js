import React, { useState } from 'react'
import { useDispatch } from "react-redux"
import { login } from './features/userSlice'

import { auth } from './firebase'
import "./Login.css"

function Login() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [profilePic, setProfilePic] = useState("")
  const dispatch = useDispatch()

  const loginToApp = e => {
    e.preventDefault()

    auth.signInWithEmailAndPassword(email, password)
      .then( userAuth => {
        dispatch( 
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            profileUrl: userAuth.user.photoURL
        }))
       
      })
      .catch( err => alert(err))
  }

  const register = () => {

    if(!name) alert("Please enter a full name!")

    //creacion de usuario con firebase
    auth.createUserWithEmailAndPassword(email, password)
      .then( userAuth => {
        userAuth.user.updateProfile({
          displayName: name,
          photoURL: profilePic
        }).then(() => {
            dispatch( 
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoUrl: profilePic
            }))
        })
      }).catch(error => alert(error.message))
        
  }

  return (
    <div className="login">
      <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="Linked in logo" />
    
      <form action="">
        <input
          value={name}
          onChange={ e => setName(e.target.value)} 
          placeholder="Full name (required if registering)" 
          type="text" 
        />
        <input 
          value={profilePic}
          onChange={ e => setProfilePic(e.target.value)}
          placeholder="Profile pic URL (optional)" 
          type="text" 
        />
        <input 
          value={email} 
          onChange={ e => setEmail(e.target.value)}
          placeholder="email" 
          type="email" 
        />
        <input 
          value={password}
          onChange={ e => setPassword(e.target.value)}
          placeholder="Password" 
          type="password" 
        />
        <button
          type="submit"
          onClick={loginToApp}
        >Sign in</button>
      </form>

      <p>Not a member?
        <span 
          className="login__register"
          onClick={register}
        > Register Now</span>
      </p>
    
    </div>
  )
}

export default Login