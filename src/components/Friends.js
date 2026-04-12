import React from 'react'
import {VideoCallRounded,Search,List,PeopleAltOutlined , Send} from '@mui/icons-material'
import './Friends.css'
import { Avatar, Button } from '@mui/material'
import FriendsList from './FriendsList'
function Friends() {
  return (
    <div className='friends--container'>
      <div className='fr--container'>
      <div className='friends--notification--container'>
          <div className='notification--icon--container'>
              <div className='notification--left'>
                <PeopleAltOutlined className='notification--icon--people'/>
                <h3 className='friend--request--text'>Friend requests</h3>
              </div>
              <div>
                <div className='notification--icon--listall'>
                  <List/>
                </div>
              </div>
            
             

          </div>

          <div className='notification--friend--request--container'>
            <div>
            <Avatar className='notification--avatar' src=''/>
            </div>
           
            <div className='notification--friend--details'>
              <p>Mike Smith</p>
              <Button className='notification--btn--confirm'>Confirm</Button>
              <Button className='notification--btn--delete'>Delete</Button>

            </div>

          </div>

      </div>

      </div>
      
   
      <FriendsList/>

      <div className='friends--btn--send--container'>
        <Send className='friends--btn--send'/>
      </div>
     

    </div>
  )
}

export default Friends