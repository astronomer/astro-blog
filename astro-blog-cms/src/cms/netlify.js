import CMS from 'netlify-cms-app';
import React from 'react';

import Article from './components/Article';
import BlogPostHeader from './components/BlogPostHeader';

import s from './styles.module.css';

const ArticlePreview = ({ entry, widgetFor }) => (
  <>
    <div className={s.postHeader}>
      <BlogPostHeader
        entry={entry}
        orientation="imageRight"
      />
    </div>
    <div className={s.body}>
      <div className={s.sidebar}>
        [social share]
      </div>
      <Article className={s.postBody}>
        <div dangerouslySetInnerHTML={{ __html: widgetFor('body') }} />
      </Article>
    </div>
  </>
);

CMS.registerPreviewTemplate('posts', ArticlePreview)
