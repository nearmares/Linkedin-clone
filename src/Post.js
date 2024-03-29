import Avatar from '@material-ui/core/Avatar'
import React, { forwardRef } from 'react'
import './Post.css'
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined'
import InputOption from './InputOption'
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined'
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined'
import SendOutlinedIcon from '@material-ui/icons/SendOutlined'
// react-flip-move library


const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
  return (
    <div ref={ref} className='post'>
      <div className="post__header">
        <Avatar src={photoUrl || name[0]}/>
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className="post__body">
        <p>{message}</p>
      </div>

      <div className="post__buttons">
        <InputOption Icon={ThumbUpAltOutlinedIcon} title='Like' color='gray'/>
        <InputOption Icon={ChatOutlinedIcon} title='Comment' color='gray'/>
        <InputOption Icon={ShareOutlinedIcon} title='Share' color='gray'/>
        <InputOption Icon={SendOutlinedIcon} title='Send' color='gray'/>
      </div>

    </div>
  )
})

export default Post
