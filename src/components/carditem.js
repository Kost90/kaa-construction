import React from 'react';
import { StaticImage } from "gatsby-plugin-image";
import { GatsbyImage} from 'gatsby-plugin-image';
import {card} from './styles/carditem.module.css';


function Carditem({key, text, title, image, alt}) {

  return (
    <div key={key} className={card}>
        <h1>{title}</h1>
        <GatsbyImage image={image} alt={alt}/>
        {/* <StaticImage src='../images/kitchen.jpeg'/> */}
        {/* <p>{text}</p> */}
    </div>
  )
}

export default Carditem