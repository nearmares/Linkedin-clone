import React from 'react'
import './Widgets.css'
import InfoIcon from '@material-ui/icons/Info'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'

function Widgets() {

  const newsArticle = ( heading, subtitle ) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>

      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  )

  return (
    <div className='widgets'>
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>

      {newsArticle('This is a Linkedin like template - only for showcase purposes', 'top news - 9099 readers')}
      {newsArticle('This site has been made with Redux, react-flip-move, firebase and materialUI', 'Specifications - 200 readers')}
      {newsArticle('Feel free to write a post', 'firebase storage  - active')}
      {newsArticle('New cryptocurrencies to take seriously in 2021', 'economy - 466 readers')}
      {newsArticle("COVID's new vaccine is here!", ' world news - 250 readers')}


    </div>
  )
}

export default Widgets
