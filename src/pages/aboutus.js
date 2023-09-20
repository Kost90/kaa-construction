import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';

function Aboutus() {
  return (
    <div>
        <Layout pageTitle='About us'/>
    </div>
  )
}

export const Head = () => <Seo title="About us page" />

export default Aboutus