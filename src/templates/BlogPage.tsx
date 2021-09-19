import React, { FunctionComponent } from 'react';
import * as blogPageStyles from './BlogPage.module.scss';

interface IBlogPageProps {
  title: string;
  date: Date;
  html: any;
}

const BlogPage: FunctionComponent<IBlogPageProps> = (props) => {
  const { title, date, html } = props;
  return (
    <div className={blogPageStyles.blogPost}>
      <h1>{title}</h1>
      <h2>{date}</h2>
      <div
        className={blogPageStyles.htmlContent}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
};

export default BlogPage;
