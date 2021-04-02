import React from 'react';

import s from './styles.module.css';

const BlogAuthor = ({ author }) => (
  <div className={s.author}>
    <div className={s.photo}>
      <span className={s.circle}>
        {author.charAt(0).toUpperCase()}
      </span>
    </div>
    <span className={s.authorName}>
      {author}
    </span>
  </div>
);

export default BlogAuthor;
