import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import Contactus from "../components/contactus";

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