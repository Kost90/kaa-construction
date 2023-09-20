import * as React from "react";
// import { useStaticQuery, graphql } from "gatsby";
import "../components/styles/reset.css";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Main from "../components/main";
import Mainblogs from "../components/mainblogs";
import Cardlist from "../components/cardlist";
import Allyouneedssection from "../components/allyouneedssection";

const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Home page">
        <Main />
        <Mainblogs />
        <Cardlist />
        <Allyouneedssection/> 
      </Layout>
    </main>
  );
};

export default IndexPage;

// export const query = graphql`
// query {
//   allMdx(sort: {frontmatter: {date: DESC}}) {
//     nodes {
//       frontmatter {
//         title
//         slug
//         date(formatString: "")
//       }
//       id
//       excerpt
//     }
//   }
// }
// `

export const Head = () => <Seo title="Home Page" />;
