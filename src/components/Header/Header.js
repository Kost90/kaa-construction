import React from 'react';
import {header, flex_container, inst_icon} from './header.module.css';
import Icon from '../../images/assets/phone-svgrepo-com.svg';
import Clock from '../../images/assets/clock-circle-svgrepo-com.svg';
import Instagram from '../../images/assets/instagram-svgrepo-com.svg';

const instUrl = 'https://www.instagram.com/kaaconstruction/?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr';

function Header() {
  return (
        <ul className={header}>
            <div className={flex_container}>
            <Icon/>
            <a>+447593065276</a>
            </div>
            <div className={flex_container}>
              <Clock/>
            <li>Mon - Sat 8:00am - 5:00pm</li>
            </div>
            <a href={instUrl} target='blanc'><Instagram className={inst_icon}/></a>
         </ul>
  )
}

export default Header