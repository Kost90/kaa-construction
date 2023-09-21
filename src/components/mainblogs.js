import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { motion } from "framer-motion";
import {blogs_container, blogs_item} from './styles/mainblogs.module.css'

function Mainblogs() {
    const data = useStaticQuery(graphql`
    query {
        allMdx(filter: {frontmatter: {key: {eq: "blog"}}}) {
          nodes {
            frontmatter {
              date(formatString: "")
              slug
              title
            }
            id
            excerpt
          }
        }
      }
      `)

      const textVariants = {
        hidden: {
          x: -100,
          opacity: 0,
        },
        visible: (custom) => ({
          x: 0,
          opacity: 1,
          ease: "easeOut",
          transition: { duration: custom * 0.3, delay: custom * 0.3 },
        }),
      };

  return (
    <ul className={blogs_container}>
        {data.allMdx.nodes.map((node,i) => (
            <motion.li
          initial={"hidden"}
          whileInView={'visible'}
          custom={i + 1}
          variants={textVariants}
          viewport={{ amount: 0.2, once: true }}
          key={node.id} className={blogs_item}>
                <h1>{node.frontmatter.title}</h1>
                <p>{node.excerpt}</p>
            </motion.li>
        ))}
    </ul>
  )
}

export default Mainblogs

