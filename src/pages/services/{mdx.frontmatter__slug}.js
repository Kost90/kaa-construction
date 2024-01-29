import * as React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { getImage } from "gatsby-plugin-image";
import Layout from "../../components/Layout/Layout";
import Seo from "../../components/Seo/Seo";
import {
  container_service,
  img_conrainer,
  container_projects_Images,
  h1_title,
} from "./styles/services.module.css";

const Services = ({ data }) => {
  const beforeImagesArr = [];
  const afterImagesArr = [];
  const image = getImage(data.mdx.frontmatter.hero_image);
  const beforeImages = data.mdx.frontmatter.before_images;
  const afterImages = data.mdx.frontmatter.after_images;

  if(beforeImagesArr){
    beforeImages.map(el => beforeImagesArr.push(el))
  }

  if(afterImagesArr){
    afterImages.map(el => afterImagesArr.push(el))
  }

  return (
    <Layout>
      <div className={container_service}>
        <h1>{data.mdx.frontmatter.title}</h1>
        <GatsbyImage
          image={image}
          alt={data.mdx.frontmatter.hero_image_alt}
          className={img_conrainer}
        />
        <p>{data.mdx.excerpt}</p>
        <button>
          <Link to="/contactus">Contact us</Link>
        </button>
      </div>
      <h1 className={h1_title}>Latest projects</h1>
      <div className={container_projects_Images}>
        <div>
          <h2>Before:</h2>
          {beforeImagesArr.map((image, i) => (
            <div key={i}>
              <GatsbyImage
                image={getImage(image)}
                alt={data.mdx.frontmatter.hero_image_alt}
              />
            </div>
          ))}
        </div>
        <div>
          <h2>After:</h2>
          {afterImagesArr.map((image, i) => (
            <div key={i}>
              <GatsbyImage
                image={getImage(image)}
                alt={data.mdx.frontmatter.hero_image_alt}
              />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      excerpt(pruneLength: 10000)
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        hero_image_alt
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
        before_images {
          childImageSharp {
            gatsbyImageData
          }
        }
        after_images {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />;

export default Services;
