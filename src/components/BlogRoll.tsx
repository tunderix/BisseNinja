import React from 'react';
import { Link, graphql, StaticQuery } from 'gatsby';

type BlogRollProps = {
  data: any;
};

const BlogRollComponent = ({ data }: BlogRollProps) => {
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <div>
      {posts &&
        posts.map(({ node: post }: any) => (
          <li>
            <span>{post.frontmatter.title}</span>
          </li>
        ))}
    </div>
  );
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
                title
                date(formatString: "MMMM DD, YYYY")
              }
            }
          }
        }
      }
    `}
    render={(data) => <BlogRollComponent data={data} />}
  />
);

export default query;
