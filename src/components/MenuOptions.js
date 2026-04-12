import React from 'react'
import './Menu.css'

function MenuOptions({Icon , text}) {
  return (
    <div className='menu--options--container'>
        <Icon className='menu--icon'>{Icon}</Icon>
        <h3 className='menu--name'>{text}</h3>

    </div>
  )
}

export default MenuOptions