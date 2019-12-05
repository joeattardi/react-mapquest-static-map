import React from 'react';
import PropTypes from 'prop-types';

export default function Banner() {
  return <div />;
}

Banner.propTypes = {
  text: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  position: PropTypes.oneOf(['bottom', 'top']),
  bannerColor: PropTypes.string,
  textColor: PropTypes.string
};
