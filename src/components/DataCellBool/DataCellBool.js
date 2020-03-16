import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './DataCellBool.scss';

const DataCellBool = ({ flagState, style }) => {
  return (
    <div style={style}>
      <p>{flagState ? 'true' : 'false'}</p>
    </div>
  );
};

DataCellBool.propTypes = {
  flagState: PropTypes.bool,
  style: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

DataCellBool.defaultProps = {
  flagState: false,
  style: '',
};

export default DataCellBool;
