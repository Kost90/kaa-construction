import React from 'react';
import Layout from '../components/Layout/Layout';
import Seo from '../components/Seo/Seo';

function Projects() {
  return (
    <div>
        <Layout pageTitle='Projects'/>
    </div>
  )
}

export const Head = () => <Seo title="Projects page" />

export default Projects