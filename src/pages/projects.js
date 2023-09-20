import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';

function Projects() {
  return (
    <div>
        <Layout pageTitle='Projects'/>
    </div>
  )
}

export const Head = () => <Seo title="Projects page" />

export default Projects