import React from 'react';
import PropTypes from 'prop-types';

export default function Marker() {
  return <div />;
}

Marker.propTypes = {
  location: PropTypes.string.isRequired,
  icon: PropTypes.string
};
