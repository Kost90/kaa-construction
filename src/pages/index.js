import * as React from "react";
import "../components/styles/reset.css";
import Layout from "../components/Layout/Layout";
import Seo from "../components/Seo/Seo";
import Main from "../components/Main/Main";
import Mainblogs from "../components/Mainblogs/Mainblogs";
import Cardlist from "../components/Cardlist/Cardlist";
import Allyouneedssection from "../components/Allyouneedssection/Allyouneedssection";
import Whychoosesection from "../components/Whychooseus/Whychoosesection";
import Contactus from "../components/Contactus/Contactus";

const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Home page">
        <Main />
        <Mainblogs />
        <Cardlist/>
        <Allyouneedssection/>
        <Whychoosesection/>
        <Contactus/> 
      </Layout>
    </main>
  );
};

export default IndexPage;

// export const query = graphql`
//   query {
//     allMdx(sort: { frontmatter: { date: DESC }}) {
//       nodes {
//         frontmatter {
//           date(formatString: "MMMM D, YYYY")
//           title
//           slug
//         }
//         id
//       }
//     }
//   }
// `

export const Head = () => <Seo title="Home Page" />;
