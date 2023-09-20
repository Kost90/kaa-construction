import React from 'react';
import {main_section, titel_text} from './styles/main.module.css';


function Main() {
  return (
    <section className={main_section}>
        <div className={titel_text}>
        <h1>Home Refurbishment. And Much More!</h1>
        <h2>Ensuring every inch of your house becomes the dream home you are after, performed by a teame with an eye for detail.</h2>
        <button>Contact Us</button>  
        </div>
    </section>
  )
}

export default Main