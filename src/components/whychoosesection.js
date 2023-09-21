import React from 'react';
import { motion } from "framer-motion";
import {container_section, text_container} from './styles/whyschooseus.module.css';

const data = ['Reliable', 'Higest Quality of Services', 'Eye for detail', 'Proffessional', 'Passion for precission', 'Higest skilled team']

function Whychoosesection() {
  const liVariants = {
    hidden: {
      opacity: 0,
    },
    vsisible: {
      opacity: 1,
      ease: "easeOut",
    },
  };

  return (
    <div className={container_section}>
        <h1>Why Choose Us?</h1>
        <ul className={text_container}>
           {data.map((node,i) => (
            <motion.li
            initial={'hidden'}
            animate={'vsisible'}
            transition={{
            duration: 1,
            delay: i * 0.7,}}
            variants={liVariants}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ amount: 0.2, once: true }}>{node}</motion.li>
           ))}
        </ul>   
    </div>
  )
}

export default Whychoosesection