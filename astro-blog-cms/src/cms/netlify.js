import CMS from 'netlify-cms-app';
import React from 'react';
import unified from 'unified';
import parse from 'remark-parse';
import remark2react from 'remark-react';

import Article from './components/Article';
import BlogPostHeader from './components/BlogPostHeader';

import s from './styles.module.css';

const PostPreview = ({ entry, getAsset, widgetFor }) => (
  <div className={s.postContainer}>
    {console.log(widgetFor('body'))}
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
        <div>
          {
            unified()
              .use(parse)
              .use(remark2react)
              .processSync(widgetFor('body')).result
          }
        </div>
      </Article>
    </div>
  </>
);

CMS.registerPreviewTemplate('blog', PostPreview);
