import * as React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import BlogRoll from '../components/BlogRoll';
import Footer from '../components/Footer/Footer';
import { FunctionComponent } from 'react';

type IIndexPageProps = {
  siteTitle: string;
};

const IndexPage: FunctionComponent<IIndexPageProps> = () => (
  <Layout>
    <SEO title="Home" lang="en" meta={[]} description="" />
    <BlogRoll />
    <Footer />
  </Layout>
);

export default IndexPage;
