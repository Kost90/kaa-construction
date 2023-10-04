import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout/Layout';
import Seo from '../components/Seo/Seo';
import {aboutus_container} from './styles/Aboutus.module.css'

function Aboutus({data}) {
  return (
        <Layout>
          <div className={aboutus_container}>
          <h1>{data.mdx.frontmatter.title}</h1>
          <p>{data.mdx.excerpt}</p>
          <button><Link to="/contactus">Contact us</Link></button> 
          </div>
        </Layout>
  )
}

export const query = graphql `query {
  mdx(frontmatter: {key: {eq: "aboutus"}}) {
    excerpt(pruneLength: 10000)
    frontmatter {
      title
    }
  }
}`

export const Head = () => <Seo title="About us page" />

export default Aboutus