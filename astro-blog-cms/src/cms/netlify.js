import CMS from 'netlify-cms-app';
import React from 'react';

import Article from './components/Article';
import BlogPostHeader from './components/BlogPostHeader';

import s from './styles.module.css';

const PostPreview = ({ entry, getAsset, widgetsFor }) => (
  <>
    <div className={s.postHeader}>
      <BlogPostHeader
        entry={entry}
        getAsset={getAsset}
        orientation="imageRight"
      />
    </div>
    <div className={s.body}>
      <div className={s.sidebar}>{' '}</div>
      <Article className={s.postBody}>
        <div dangerouslySetInnerHTML={{ __html: widgetsFor('body') }} />
      </Article>
    </div>
  </>
);

CMS.registerPreviewTemplate('blog', PostPreview);
