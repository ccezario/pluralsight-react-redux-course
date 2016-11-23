import React from 'react';

const LoadingDots = ({interval, dots}) => {
  return (
    <div>...</div>
  );
};

LoadingDots.propTypes = {
  interval: React.PropTypes.object.isRequired,
  dots: React.PropTypes.object.isRequired
};

export default LoadingDots;
