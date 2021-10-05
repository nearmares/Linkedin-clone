import { Avatar } from '@material-ui/core'
import React from 'react'
import './Sidebar.css'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'

function Sidebar() {

  const user = useSelector(selectUser)

  const recentItem = topic => (
    <div className='sidebar__recentItem'>
      <span className='sidebar__hash'>#</span>
      <p>{topic}</p>
    </div>
  )

  return (
    <div className='sidebar'>
      <div className='sidebar__top'>
        <img src='https://images.unsplash.com/photo-1630086154002-dbc3117c466b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80' alt='background'/>
        <Avatar src={user.photoUrl} className='sidebar__avatar'>
         
        </Avatar>  
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>

      <div className='sidebar__stats'>
        <div className='sidebar__stat'>
          <p>Who viewed you</p>
          <p className='sidebar__statNumber'>2,500</p>
        </div>
        <div className='sidebar__stat'>
          <p>Views on post</p>
          <p className='sidebar__statNumber'>2,000</p>
        </div>
      </div> 

      <div className='sidebar__bottom'>
        <p>Recent</p>
        {recentItem('reactJs')}
        {recentItem('MERN')}
        {recentItem('softwareengineering')}
        {recentItem('design')}
        {recentItem('webdeveloper')}
      </div>

    </div>
  )
}

export default Sidebar