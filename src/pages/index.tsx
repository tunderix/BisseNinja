import * as React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import BlogRoll from '../components/BlogRoll';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <BlogRoll />
  </Layout>
);

export default IndexPage;
