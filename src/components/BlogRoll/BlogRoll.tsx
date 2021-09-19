import React from 'react';
import BlogPost from '../BlogPost';

type BlogRollComponentProps = {
  posts: any;
};

const BlogRollComponent = ({ posts: posts }: BlogRollComponentProps) => {
  return (
    <div>
      {posts &&
        posts.map(({ node: post }: any) => (
          <BlogPost
            key={post.frontmatter.title}
            id={post.id}
            title={post.frontmatter.title}
            date={post.frontmatter.date}
            html={post.excerpt}
            path={post.frontmatter.path}
          />
        ))}
    </div>
  );
};

export default BlogRollComponent;
