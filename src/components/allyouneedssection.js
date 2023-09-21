import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image";
import {container_section, img_container, text_container, flex_container} from './styles/allyouneedsection.module.css';

function Allyouneedssection() {

    const data = useStaticQuery(graphql`query {
      mdx(frontmatter: {slug: {eq: "third"}}) {
        excerpt
        frontmatter {
          title
        }
      }
    }
      `)

  return (
    <div className={container_section}>
      <div className={flex_container}>
      <StaticImage src='../images/pexels-pixabay-534220.jpg' className={img_container}/>
        <div className={text_container}>
            <h1>{data.mdx.frontmatter.title}</h1>
            <p>{data.mdx.excerpt}</p>
        </div>
      </div>
    </div>
  )
}

export default Allyouneedssection