import { Avatar , Button } from '@mui/material'
import React from 'react'
import './PostField.css'
import profile from '../images/profile.jpg'
import { Close ,CollectionsRounded,MoodRounded,PeopleAltRounded,ListRounded} from '@mui/icons-material'
function PostField({inputClicked , close , createPost , postTweet , facebookPost}) {
   
  return (
    <div className='post--field--container'>
        <div className='create--post--container'>
            <div></div>
            <h3 className='create--post--text'>Create post</h3>
            <div onClick={close} className='post--field--btn--close--container'>
            <Close/>
            </div>
            
        </div>
        <div className='post--field--profile--container'>
            <Avatar src={profile}/>
            <div className='select--who--container'>
                <h3 className='profile--name'>Emmanuel Mzota</h3>
                <select className='select--friends' name='friends'>
                    <option name='friends' value={'friends'}>Friends</option>
                </select>
            </div>
           
        </div>

        <div className='text--area--container'>
            <textarea onChange={createPost} value={facebookPost} className='post--field--text--area' placeholder="What's on your mind, Emmanuel?"></textarea>
        </div>
        <div className='add--post--btn--container'>
            <h3 className='add--post--text'>Add to your post</h3>
            <div className='post--field--icon--container2'>
                <div className='post--field--icon'>
                <CollectionsRounded className='post--field--photo'/>
                </div>
                <div className='post--field--icon'>
                <PeopleAltRounded className='post--field--people'/>
                </div>
                <div className='post--field--icon'>
                <MoodRounded className='post--field--mood'/>
                </div>
                
                
             
            </div>

            <div className='post--field--icon--container'>
                <div className='post--field--icon'>
                    <ListRounded className='post--field--menu'/>
                </div>
            
            </div>
           
        </div>
        <Button onClick={postTweet} className='post--field--post--button'>Post</Button>

    </div>
  )
}

export default PostField