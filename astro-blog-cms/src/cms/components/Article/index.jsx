import React from 'react';
import cn from 'classnames';

import s from './styles.module.css';

const Article = ({
  className,
  children,
  ...otherProps
}) => (
  <article className={cn(className, s.article)} {...otherProps}>
    {children}
  </article>
);

export default Article;
