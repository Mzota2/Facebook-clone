import { Avatar } from '@mui/material'
import React from 'react'
import './Post.css';
import profile from '../images/profile.jpg'
import PostField from './PostField';
import { VideoCameraFrontRounded ,CollectionsRounded,MoodBadRounded, Mood, MoodRounded} from '@mui/icons-material'

function Post({inputClicked , activatePostField , createPost , postTweet , facebookPost}) {
  return (
    <div className='post--container'>
        <div className='post--level--top'>
            <Avatar src={profile} />
            <input onClick={activatePostField} placeholder="What's on your mind , Emmanuel?" className='post--input' type={'text'}/>
        </div>
        <div className='post--level--bottom'>
            <div className='post--kind'>
                <VideoCameraFrontRounded className='live--video'/>
                <p>Live Video</p>
            </div>
            <div className='post--kind'>
                <CollectionsRounded className='photo--video'/>
                <p>Photo/Video</p>
            </div>
            <div className='post--kind'>
                <MoodRounded className='feeling--activity' />
                <p>Feeling/Activity</p>
            </div>
            
            
        </div>
        {inputClicked && <PostField close={activatePostField}  inputClicked={inputClicked} createPost={createPost} postTweet={postTweet} facebookPost={facebookPost}/>}

    </div>
  )
}

export default Post