import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image";
import {container_section, img_container, text_container, flex_container} from './styles/allyouneedsection.module.css';

function Allyouneedssection() {

    const data = useStaticQuery(graphql`query {
        mdx(id: {eq: "1912fad5-3e5a-5527-a316-1095caf003e8"}) {
          frontmatter {
            key
            title
            slug
            date
          }
          excerpt(pruneLength: 1000)
          id
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