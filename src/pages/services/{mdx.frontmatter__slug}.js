import * as React from 'react';
import { graphql} from 'gatsby';
import { GatsbyImage} from 'gatsby-plugin-image';
import { getImage } from 'gatsby-plugin-image';
import Layout from '../../components/layout';
import Seo from '../../components/seo';
import {container_service, img_conrainer} from './styles/services.module.css';

const Services = ({ data }) => {

  const image= getImage(data.mdx.frontmatter.hero_image);
  return (
    <Layout>
      <div className={container_service}>
      <h1>{data.mdx.frontmatter.title}</h1>
      <GatsbyImage image={image} alt={data.mdx.frontmatter.hero_image_alt} className={img_conrainer}/>
      <p>Some text about service</p>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        hero_image_alt
            hero_image {
              childImageSharp {
              gatsbyImageData
              }
            }
      }
    }
  }
`

export const Head = ({data}) => <Seo title={data.mdx.frontmatter.title} />

export default Services