import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import s from './styles.module.css';

const Tag = ({
  className,
  text,
  to,
  ...otherProps
}) => {
  if (to) {
    return (
      <a
        href="#" // eslint-disable-line
        className={cn(className, s.link, s.tag)}
        {...otherProps}
      >
        {text}
      </a>
    );
  }
  return (
    <span
      className={cn(className, s.tag)}
      {...otherProps}
    >
      {text}
    </span>
  );
};

Tag.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string,
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.array,
  ]).isRequired,
};

Tag.defaultProps = {
  className: null,
  to: null
};

export default Tag;
