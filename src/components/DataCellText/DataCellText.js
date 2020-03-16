import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './DataCellText.scss';

const DataCellText = ({ dataContent, isNumber, style }) => {
  return (
    <div style={style}>
      <p className={isNumber ? 'number-cell' : undefined}>{dataContent}</p>
    </div>
  );
};

DataCellText.propTypes = {
  dataContent: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  isNumber: PropTypes.bool,
  style: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

DataCellText.defaultProps = {
  dataContent: '',
  isNumber: false,
  style: '',
};

export default DataCellText;
