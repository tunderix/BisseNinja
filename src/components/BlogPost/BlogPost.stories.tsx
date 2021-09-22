import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import BlogPost from './BlogPost';

const BlogPostStory: ComponentMeta<typeof BlogPost> = {
  title: 'Base BlogPost',
  component: BlogPost
};

export default BlogPostStory;

export const BlogPostBase: ComponentStory<typeof BlogPost> = () => (
  <BlogPost
    date="12.4.2021"
    htmlString="<p>HTML Is so Awesome</p>"
    path="/blogs/somePost"
    title="Title Is Here"
  />
);
