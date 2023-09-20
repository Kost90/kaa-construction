import React from 'react';
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
    <h1 className={section_title}>OUR SERVICES:</h1>
    <div className={cards_container}>
{data.allMdx.nodes.map(node => (
    <Carditem key={node.id} title={node.frontmatter.title} text={node.excerpt} image={getImage(node.frontmatter.hero_image)} alt={node.frontmatter.hero_image_alt}/>
))}
    </div>
    </section>
  )
}

export default Cardlist