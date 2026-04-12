import React from 'react'
import {VideoCallRounded,Search,List} from '@mui/icons-material'
import './Friends.css'
import { Avatar } from '@mui/material'

function Group() {
  return (
    <div className='friends--bottom--level'>
        <h3 className='group--header--text'>Group Conversations</h3>
        <div className='friends--group--container'>
          {['Primary School' , 'Workmates' , 'Secondary School' , 'Church'].map((name) =>{
            return(
              
              <div className='group--detail--container'>
                  <Avatar className='friend--avatar' src=''/>
                  <p className='group--name'>{name}</p>
              </div>
            )
          })}
          <div className='create--group--container'>
            <div className='create--group--btn'>+</div>
            <h4 className='create--group--text'>Create new group</h4>
          </div>

        </div>

      </div>
  )
}

export default Group