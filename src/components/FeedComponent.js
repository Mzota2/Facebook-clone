import React from 'react'
import profile from '../images/profile.jpg'
import {Avatar} from '@mui/material'
import {VerifiedUser} from '@mui/icons-material';
import './FeedContent.css'
function FeedComponent({text , displayName}) {
  return (
    <div className='facebook--post--container'>
        <div className='facebook--post--top--part'>
          <div className='facebook--post--top'>
            <Avatar src={profile}/>
            <div className='facebook--post--profile--details'>
              <h4 className='facebook--post--userName'>{displayName}</h4>
              <p className='facebook--post--date'>11 September 2022</p>
            </div>
          </div>
          <i class="fbpost--menu fas fa-ellipsis-h"></i>
          
        </div>

        <div className='facebook--post--middle--part'>
          <h2>{text}</h2>

        </div>

        <div className='facebook--post--bottom--part'>
          <p className='fbpost--icon--container'><i class="fbpost--icon far fa-thumbs-up"></i>Like</p>
          <p className='fbpost--icon--container'><i class="fbpost--icon far fa-comment"></i>Comment</p>
          <p className='fbpost--icon--container'><i class="fbpost--icon fas fa-share"></i>Share</p>
          
        </div>
 
    </div>
  )
}

export default FeedComponent