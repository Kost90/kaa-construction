import React from 'react';
import {container_section, text_container} from './styles/whyschooseus.module.css';

const data = ['Reliable', 'Higest Quality of Services', 'Eye for detail', 'Proffessional', 'Passion for precission', 'Higest skilled team']

function Whychoosesection() {


  return (
    <div className={container_section}>
        <h1>Why Choose Us?</h1>
        <ul className={text_container}>
           {data.map(node => (
            <li>{node}</li>
           ))}
        </ul>   
    </div>
  )
}

export default Whychoosesection