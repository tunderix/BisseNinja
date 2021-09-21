import React from 'react';
import { Link } from 'gatsby';
import * as styles from './blogPost.module.scss';
import { motion } from 'framer-motion';

type BlogPostProps = {
  title: string;
  date: string;
  html: any;
  id: string;
  path: string;
};

const BlogPost = ({ title, date, html, id, path }: BlogPostProps) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.04,
        transition: { duration: 0.3 }
      }}
      className={styles.blogPost}
    >
      {path && (
        <Link className="title has-text-primary is-size-4" to={path}>
          {title}
        </Link>
      )}
      <h2>{date}</h2>
      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </motion.div>
  );
};

export default BlogPost;
