import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './DataCellAvatar.scss';

const DataCellAvatar = ({ imageUrl, className, style }) => {
  return (
    <div style={style} className={`avatar-block ${className}`}>
      <img className="avatar-image" src={imageUrl} alt="avatar" />
    </div>
  );
};

DataCellAvatar.propTypes = {
  imageUrl: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

DataCellAvatar.defaultProps = {
  imageUrl: '',
  className: '',
  style: '',
};

export default DataCellAvatar;
