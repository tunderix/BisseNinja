import React from 'react';
import { graphql } from 'gatsby';
import BlogPage from './BlogPage';
export default function Template({
  data // this prop will be injected by the GraphQL query below.
}: any) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  return (
    <div className="blog-post-container">
      <BlogPage title={frontmatter.title} date={frontmatter.date} html={html} />
    </div>
  );
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(id: {}, frontmatter: { path: { eq: $path } }) {
      frontmatter {
        date
        title
        path
      }
      html
    }
  }
`;
