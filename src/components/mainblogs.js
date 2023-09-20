import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
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

  return (
    <ul className={blogs_container}>
        {data.allMdx.nodes.map(node => (
            <li key={node.id} className={blogs_item}>
                <h1>{node.frontmatter.title}</h1>
                <p>{node.excerpt}</p>
            </li>
        ))}
    </ul>
  )
}

export default Mainblogs

