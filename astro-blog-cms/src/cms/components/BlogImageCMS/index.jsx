import React from 'react';

import s from './styles.module.css';

const BlogImage = ({ image, alt }) => (
  <span className={s.imageWrapper}>
    <img
      src={image}
      alt={alt}
      loading="lazy"
      className={s.image}
    />
  </span>
);

export default BlogImage;
