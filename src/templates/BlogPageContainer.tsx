import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';
import BlogPage from './BlogPage';

interface ITemplateProps {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string;
        date: Date;
      };
      html: HTMLElement;
    };
  };
}

export const pageQuery = graphql`
  query ($path: String!) {
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

const Template: FunctionComponent<ITemplateProps> = ({ data }) => {
  const { title, date } = data.markdownRemark.frontmatter;
  const { html } = data.markdownRemark;

  return (
    <div className="blog-post-container">
      <BlogPage title={title} date={date} html={html} />
    </div>
  );
};
export default Template;
