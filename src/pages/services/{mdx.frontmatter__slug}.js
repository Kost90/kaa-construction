import * as React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { getImage } from "gatsby-plugin-image";
import Layout from "../../components/Layout/Layout";
import Seo from "../../components/Seo/Seo";
import { container_service, img_conrainer, container_projects_Images } from "./styles/services.module.css";

const Services = ({ data }) => {
  const projectImagesArr = [];
  // const dataMdx = data;
  const image = getImage(data.mdx.frontmatter.hero_image);
  data.mdx.frontmatter.projects_images.map((image) =>
    projectImagesArr.push(image)
  );
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
      <h2>Latest projects</h2>
      <div className={container_projects_Images}>
        {projectImagesArr.map((image) => (
          <GatsbyImage
            image={getImage(image)}
            alt={data.mdx.frontmatter.hero_image_alt}
          />
        ))}
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
        projects_images {
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
