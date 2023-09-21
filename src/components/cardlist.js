import React from 'react';
import { motion } from "framer-motion";
import { useStaticQuery, graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import Carditem from './carditem';
import {card_section, cards_container, section_title} from './styles/cardlist.module.css'

function Cardlist() {
    const data = useStaticQuery(graphql`
    query MyQuery {
      allMdx(filter: {frontmatter: {key: {eq: "card"}}}) {
        nodes {
          frontmatter {
            hero_image_alt
            hero_image {
              childImageSharp {
                gatsbyImageData
              }
            }
            title
            key
            slug
          }
          id
          excerpt
        }
      }
    }
      `)

  return (
    <section className={card_section}>
    <motion.h1
      initial={{
        y: -100,
        opacity: 0,
      }}
      transition={{
        duration: 0.3,
      }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ amount: 0.2, once: true }}
     className={section_title}>OUR SERVICES:</motion.h1>
    <div className={cards_container}>
{data.allMdx.nodes.map(node => (
    <Carditem key={node.id} title={node.frontmatter.title} text={node.excerpt} image={getImage(node.frontmatter.hero_image)} alt={node.frontmatter.hero_image_alt} slug={node.frontmatter.slug}/>
))}
    </div>
    </section>
  )
}

export default Cardlist