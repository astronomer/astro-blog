import React from 'react';
import PropTypes from 'prop-types';

const Date = ({ value, format, ...otherProps }) => (
  <time dateTime={value} {...otherProps}>
    {value.toString()}
  </time>
);

Date.propTypes = {
  value: PropTypes.string.isRequired,
  format: PropTypes.string,
};

Date.defaultProps = {
  format: 'MMM D, YYYY',
};

export default Date;
