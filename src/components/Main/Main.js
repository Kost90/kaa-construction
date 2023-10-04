import React from 'react';
import { Link } from "gatsby";
import { motion } from "framer-motion";
import {main_section, titel_text} from './main.module.css';


function Main() {
  const textVariants = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    vsisible: (custom) => ({
      x: 0,
      opacity: 1,
      ease: "easeOut",
      transition: { duration: custom * 0.3, delay: custom * 0.8 },
    }),
  };

  return (
    <motion.section 
    initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
        }}
    className={main_section}>
        <div className={titel_text}>
        <motion.h1
        initial={"hidden"}
        animate={"vsisible"}
        custom={1}
        variants={textVariants}>Home Refurbishment. And Much More!</motion.h1>
        <motion.h2
        initial={"hidden"}
        animate={"vsisible"}
        custom={2}
        variants={textVariants}>Ensuring every inch of your house becomes the dream home you are after, performed by a teame with an eye for detail.</motion.h2>
        <motion.button
        initial={"hidden"}
        animate={"vsisible"}
        custom={3}
        variants={textVariants}>
          <Link to="/contactus">Contact us</Link>
          </motion.button>  
        </div>
    </motion.section>
  )
}

export default Main