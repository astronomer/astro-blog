import React from 'react';
import cn from 'classnames';
import { Link } from 'gatsby';

import Date from '../Date';
import Tag from '../Tag';
import BlogAuthor from '../BlogAuthor';
import BlogImage from '../BlogImage';

import s from './styles.module.css';

const BlogLatestPost = ({ entry, getAsset, orientation = 'imageRight' }) => {
  const hero = getAsset(entry.getIn(['data', 'heroImagePath']));
  return (
    <>
      <div className={cn(s.postHeader, s.imageRight)}>
        {hero && (
          <div className={s.heroImage}>
            <Link to={entry.getIn(['data', 'slug'])}>
              <BlogImage
                image={hero}
                alt={entry.getIn(['data', 'title'])}
              />
            </Link>
          </div>
        )}
        <span className={s.postDetails}>
          <Link to={entry.getIn(['data', 'slug'])} className={s.blogLink}>
            <h1>{entry.getIn(['data', 'title'])}</h1>
          </Link>
          <p>{entry.getIn(['data', 'description'])}</p>
          <div className={s.metaData}>
            {entry.getIn(['data', 'date']) && (
              <Date value={entry.getIn(['data', 'date'])} className={s.date} />
            )}
            <Tag text={`00 min read`} />
          </div>
          <div className={s.authors}>
            {entry.getIn(['data', 'authors']) && (
              entry.getIn(['data', 'authors']).map((author) => <BlogAuthor key={author} author={author} />)
            )}
          </div>
        </span>
      </div>
      <hr className={s.sep} />
    </>
  );
};

export default BlogLatestPost;
