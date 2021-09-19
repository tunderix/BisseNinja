import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import BlogRoll from './BlogRoll';

type BlogRollContainerProps = {
  data: any;
};

const BlogRollContainer = ({ data }: BlogRollContainerProps) => {
  const { edges: posts } = data.allMarkdownRemark;
  return <div>{posts && <BlogRoll posts={posts} />}</div>;
};

const query = () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              frontmatter {
                path
                title
                date(formatString: "MMMM DD, YYYY")
              }
            }
          }
        }
      }
    `}
    render={(data) => <BlogRollContainer data={data} />}
  />
);

export default query;
