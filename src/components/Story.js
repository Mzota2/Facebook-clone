import React from 'react';
import './Story.css'
import profile from '../images/profile.jpg'
import post1 from '../images/post1.jpg';
import post2 from '../images/post2.jpg';
import post3 from '../images/post3.jpg';
import { Avatar, Button } from '@mui/material';
import ArrowForwardIosRounded from '@mui/icons-material/ArrowForwardIosRounded';

function Story() {
  return (
    <div className='story--container'>
        <div className='story--header--container'>
            <h3 className='header--stories'>Stories</h3>
            <h3 className='story--header'>Reels</h3>
            <h3 className='story--header'>Rooms</h3>
        </div>
        <div className='stories--main--container'>
            <div className='user--story'>
                <img className='main--user--profile' src={profile}/>
                <div className='add--story--btn'>+</div>
                <p className='create--story'>Create Story</p>

            </div>
            <div className='story'>
                <Avatar className='user--profile' src={profile}/>
                <img className='story--images' src={post1} />

            </div>
            <div className='story'>
                <Avatar className='user--profile' src={profile}/>
                <img className='story--images' src={post2}/>

            </div>
            <div className='story'>
                <Avatar className='user--profile' src={profile}/>
                <img className='story--images' src={post3} />

            </div>
            <div className='btn--next--container'>
                <ArrowForwardIosRounded/>
            </div>
          

        </div>

    </div>
  )
}

export default Story