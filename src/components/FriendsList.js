import React from 'react'
import {VideoCallRounded,Search,List} from '@mui/icons-material'
import './Friends.css'
import { Avatar } from '@mui/material'
import './FriendsList.css'
import ActiveFriends from './ActiveFriends'
import Group from './Group'
function FriendsList() {
  return (
    <div className='friends--component--container'>
         <div className='friends--top--level'>
        <h2 className='friends--sponsored--text'>Sponsored</h2>
      </div>
      <ActiveFriends/>
      <Group/>
    </div>
  )
}

export default FriendsList