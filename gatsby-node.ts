import { GatsbyNode } from 'gatsby';
import * as path from 'path';

export interface INode {
  frontmatter: {
    path: string;
  };
}

interface IQueryResult {
  allMarkdownRemark: {
    edges: {
      node: INode;
    }[];
  };
}

export const createPages: GatsbyNode['createPages'] = async ({
  actions,
  graphql,
  reporter
}) => {
  const { createPage } = actions;

  const blogPostTemplate = path.resolve(`src/templates/BlogPageContainer.tsx`);

  const result = await graphql<IQueryResult>(`
    {
      allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  if (!result.data) {
    throw new Error('ERROR: Could not fetch posts on build');
  }

  const posts = result.data.allMarkdownRemark.edges;

  posts.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
      context: {} // additional data can be passed via context
    });
  });
};
