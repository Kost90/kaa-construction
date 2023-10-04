import React from 'react';
import Layout from '../components/Layout/Layout';
import Seo from '../components/Seo/Seo';
import Contactus from "../components/Contactus/Contactus";

function contactus() {
  return (
    <div>
        <Layout pageTitle='Contact Us'>
          <Contactus/>
        </Layout>
    </div>
  )
}

export const Head = () => <Seo title="Contact us page" />

export default contactus