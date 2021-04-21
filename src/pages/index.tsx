import * as React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import BlogRoll from '../components/BlogRoll';
import Footer from '../components/Footer/Footer';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <BlogRoll />
    <Footer />
  </Layout>
);

export default IndexPage;
