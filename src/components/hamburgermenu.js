import React from 'react'
import {hamburger_menu, burger, burger_1, burger_2, burger_3} from './styles/hamburgermenu.module.css'
import { memo } from 'react';

const Hamburger = memo (({isOpen}) =>{

  return (
    <div className={hamburger_menu}>
        <div className={isOpen?`${burger} ${burger_1}`:burger}></div>
        <div className={isOpen?`${burger} ${burger_2}`:burger}></div>
        <div className={isOpen?`${burger} ${burger_3}`:burger}></div>
    </div>
  )
})

export default Hamburger