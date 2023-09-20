import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';

function contactus() {
  return (
    <div>
        <Layout pageTitle='Contact Us'/>
    </div>
  )
}

export const Head = () => <Seo title="Contact us page" />

export default contactus