import React from 'react';
import {footer, footer_container, logo_container, list_container_footer, flex_container, border, inst_icon} from './footer.module.css';
import Icon from '../../images/assets/phone-svgrepo-com-footer.svg';
import Logo from '../../images/assets/kaa-logo-footer.svg';
import Clock from '../../images/assets/clock-circle-svgrepo-com-footer.svg';
import Instagram from '../../images/assets/instagram-svgrepo-com-footer.svg';

const instUrl = 'https://www.instagram.com/kaaconstruction/?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr';

function Footer() {
  return (
    <div className={footer}>
        <div className={footer_container}>
            <Logo className={logo_container}/>
            <ul className={list_container_footer}>
            <h3>Contact Us</h3>
            <div className={flex_container}>
            <Icon/>
            <a href='tel:+447593065276'>+447593065276</a>
            </div>
            <div className={flex_container}>
              <Clock/>
            <li>Mon - Sat 8:00am - 5:00pm</li>
            </div>
            <div className={flex_container}>
            <a href={instUrl} target='blanc'><Instagram className={inst_icon}/></a>
            <li>Instagram</li>
            </div>
         </ul>
        </div>
        <div className={border}>
            <p>developed by Kostiantyn Dontsov</p>
        </div>
    </div>
  )
}

export default Footer