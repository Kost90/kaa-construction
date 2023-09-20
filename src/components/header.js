import React from 'react';
import {header, flex_container} from './styles/header.module.css';
import Icon from '../images/assets/phone-svgrepo-com.svg';
import Clock from '../images/assets/clock-circle-svgrepo-com.svg';
import Instagram from '../images/assets/instagram-svgrepo-com.svg';


function Header() {
  return (
        <ul className={header}>
            <div className={flex_container}>
            <Icon/>
            <li>+447593065276</li>
            </div>
            <div className={flex_container}>
              <Clock/>
            <li>Mon - Sat 7:00am - 5:00pm</li>
            </div>
            <Instagram/>
         </ul>
  )
}

export default Header