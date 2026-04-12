import { Avatar } from '@mui/material'
import React from 'react'
import MenuOptions from './MenuOptions'
import './Menu.css'
import profile from '../images/profile.jpg'
import { GroupWorkRounded,Storefront,AddToQueue , PeopleAltOutlined,MemoryRounded,PagesRounded,AppShortcutRounded,EventSeatRounded,RecentActorsRounded,StarRateRounded ,ExpandMoreRounded, ExpandMore} from '@mui/icons-material'

function Menu() {
  return (
    <div className='menu--container'>
        <div className='menu--profile--container'>
            <  Avatar className ='avatar' src={profile}/>
            <h2 className='profile--name'>Emmanuel Mzota</h2>
        </div>

        <MenuOptions Icon ={PeopleAltOutlined} text={'Friends'}/>
        <MenuOptions Icon ={GroupWorkRounded} text={'Groups'}/>
        <MenuOptions Icon ={Storefront} text={'MarketPlace'}/>
        <MenuOptions Icon ={AddToQueue} text={'Watch'}/>
        <MenuOptions Icon ={MemoryRounded} text={'Memories'}/>
        <MenuOptions Icon ={AppShortcutRounded} text={'Saved'}/>
        <MenuOptions Icon ={PagesRounded} text={'Pages'}/>
        <MenuOptions Icon ={EventSeatRounded} text={'Events'}/>
        <MenuOptions Icon ={RecentActorsRounded} text={'Most Recent'}/>
        <MenuOptions Icon ={StarRateRounded} text={'Favorite'}/>

        <div className='menu--options--container'>
            <ExpandMoreRounded className='menu--icon--more' />
            <h2 className='menu--name'>See More</h2>
        </div>
    </div>
  )
}

export default Menu