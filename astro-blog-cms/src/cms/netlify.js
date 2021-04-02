import CMS from 'netlify-cms-app';
import React from 'react';
import MDX from 'mdx-scoped-runtime';
import ReactPrismjs from '@uiw/react-prismjs';

import Article from './components/Article';
import BlogPostHeader from './components/BlogPostHeader';

import s from './styles.module.css';

const PostPreview = ({ entry, getAsset, widgetFor }) => (
  <div className={s.postContainer}>
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
        <MDX
          components={{
            img: (props) => <img src={getAsset(props.src)} alt={props.alt} title={props.title} />,
          }}
        >
          {entry.getIn(['data', 'body'])}
        </MDX>
      </Article>
    </div>
  </div>
);

CMS.registerPreviewTemplate('blog', PostPreview);
