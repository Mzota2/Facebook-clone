import React from 'react'
import './Navbar.css'
import profile from '../images/profile.jpg'
import { FacebookRounded ,  AddToQueue ,Storefront , GroupWorkRounded,SportsEsports,MenuRounded ,MapsUgcRounded ,NotificationsRounded, Home, Search} from '@mui/icons-material'
import { Avatar } from '@mui/material'

function NavBar() {
  return (
    <div className='navbar--container'>
        <div className='navbar--first--collection'>
            <FacebookRounded className='fb--icon fb--clone--icons'/>
            <div className='navbar--input--container'>
              <div className='navbar--search--icon--container'>
                <Search className='navbar--search--icon'/>
              </div>
              
              <input className='navbar--input' type={'text'} placeholder='Search Facebook' />
            </div>
          
           

        </div>
        <div className='navbar--second--collection'>
        
          <div className=' navbar--second--home--icon'>
          <Home className=' fb--home--icon'/>
          </div>
          <div className='navbar--second--collection--icons'>
          <AddToQueue className='fb--clone--icons'/>
          </div>
          <div className='navbar--second--collection--icons'>
          <Storefront className='fb--clone--icons'/>
          </div>
          <div className='navbar--second--collection--icons'>
          <GroupWorkRounded className='fb--clone--icons'/>
          </div>
          <div className='navbar--second--collection--icons'>
          <SportsEsports className='fb--clone--icons'/>

          </div>
          {window.innerWidth <= 1100 &&<MenuRounded className=' right--side--icons--first--collection'/>}  
        </div>
        <div className='navbar--third--collection'>
          <div className='navbar--third--collection--icons first--menu--icon'>
             <MenuRounded className=' right--side--icons'/>
          </div>
          <div className='navbar--third--collection--icons second--menu--icon'>
             <p>+</p>
          </div>

          <div  className='navbar--third--collection--icons'>
            <MapsUgcRounded className=' right--side--icons'/>
          </div>

          <div  className='navbar--third--collection--icons'>
            <NotificationsRounded className=' right--side--icons'/>
          </div>
           
            <Avatar src={profile}/>

        </div>

    </div>
  )
}

export default NavBar