import React from 'react';

import s from './styles.module.css';

const BlogImage = ({ image, alt }) => (
  <img
    src={image}
    alt={alt}
    loading="lazy"
    className={s.image}
  />
);

export default BlogImage;
