import React from 'react';
import {footer, footer_container, logo_container, list_container_footer, flex_container, border} from './styles/footer.module.css';
import Icon from '../images/assets/phone-svgrepo-com-footer.svg';
import Logo from '../images/assets/kaa-logo-footer.svg';
import Clock from '../images/assets/clock-circle-svgrepo-com-footer.svg';
import Instagram from '../images/assets/instagram-svgrepo-com-footer.svg';

function Footer() {
  return (
    <div className={footer}>
        <div className={footer_container}>
            <Logo className={logo_container}/>
            <ul className={list_container_footer}>
            <h3>Contact Us</h3>
            <div className={flex_container}>
            <Icon/>
            <li>+447593065276</li>
            </div>
            <div className={flex_container}>
              <Clock/>
            <li>Mon - Sat 8:00am - 5:00pm</li>
            </div>
            <div className={flex_container}>
            <Instagram/>
            <li>Instagram</li>
            </div>
         </ul>
        </div>
        <div className={border}>
            <p>@Konstantyn Dontsov</p>
        </div>
    </div>
  )
}

export default Footer