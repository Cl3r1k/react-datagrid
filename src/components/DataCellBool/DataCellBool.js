import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './DataCellBool.scss';

const DataCellBool = ({ flagState, style }) => {
  return (
    <div style={style} className="flag-block">
      <div className={`flag-state ${flagState ? 'active' : ''}`} />
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
