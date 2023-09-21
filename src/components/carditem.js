import React from 'react';
import { motion } from "framer-motion";
import { GatsbyImage} from 'gatsby-plugin-image';
import {card, img_conrainer} from './styles/carditem.module.css';


function Carditem({key, text, title, image, alt}) {

  const cardAnimation = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition:{duration: 0.3},
    }
  }
  return (
    <motion.div 
    initial='hidden'
    whileInView='visible'
    viewport={{amount: 0.2, once: true}}
    variants={cardAnimation}
    key={key} className={card}>
        <h1>{title}</h1>
        <GatsbyImage image={image} alt={alt} className={img_conrainer}/>
    </motion.div>
  )
}

export default Carditem