import React from 'react';
import { motion } from "framer-motion";
import {container_section, text_container} from './whyschooseus.module.css';

const data = ['Reliable', 'Higest Quality of Services', 'Eye for detail', 'Proffessional', 'Passion for precission', 'Higest skilled team']

function Whychoosesection() {
  const liVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      ease: "easeOut",
    },
  };

  return (
    <div className={container_section}>
        <h1>Our testimonials</h1>
        <ul className={text_container}>
           {data.map((node,i) => (
            <motion.li
            initial={'hidden'}
            whileInView={'visible'}
            transition={{
              duration: 1,
              delay: i * 0.5}}
            viewport={{ amount: 0.2, once: true }}
            variants={liVariants}
            >{node}</motion.li>
           ))}
        </ul>   
    </div>
  )
}

export default Whychoosesection