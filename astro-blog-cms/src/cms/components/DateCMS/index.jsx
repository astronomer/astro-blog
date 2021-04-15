import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

const Date = ({ value, format, ...otherProps }) => (
  <time dateTime={value} {...otherProps}>
    {dayjs(value).format(format)}
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
