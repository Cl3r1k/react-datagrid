import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './DataCellAvatar.scss';

const DataCellAvatar = ({ imageUrl, style }) => {
  return (
    <div style={style} className="avatar-block">
      <img className="avatar-image" src={imageUrl} alt="avatar" />
    </div>
  );
};

DataCellAvatar.propTypes = {
  imageUrl: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

DataCellAvatar.defaultProps = {
  imageUrl: '',
  style: '',
};

export default DataCellAvatar;
