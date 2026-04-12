import React from 'react'
import {VideoCallRounded,Search,List} from '@mui/icons-material'
import './Friends.css'
import { Avatar } from '@mui/material'
function ActiveFriends() {
  return (
    <div className='friends--mid--level'>
    <div className='friends--mid--icons--container'>
        <h3 className='friends--contact--text'>Contacts</h3>
        <div className='friend--contact--icon--container'>
        <VideoCallRounded className='friend--contact--icon'/>
        </div>
        <div className='friend--contact--icon--container'>
        <Search className='friend--contact--icon'/>
        </div>
        <div className='friend--contact--icon--container'>
        <List className='friend--contact--icon'/>
        </div> 
    </div>

    <div className='friends--mid--list'>
      {['Emmanuel Peter' , 'Oscar Bluncur' , 'James Evance' , 'Shaun Gowaz' , 'Vic Thom' , 'Brian Bash'].map((name) =>{
        return(
          <div className='friends--detail--container'>
              <Avatar className='friend--avatar' src=''/>
              <p className='friends--name'>{name}</p>
          </div>
          
        )
      })}

    </div>

  </div>
  )
}

export default ActiveFriends