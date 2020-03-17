import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './DataCellText.scss';

const DataCellText = ({
  dataContent,
  isNumber,
  largeText,
  isHidden,
  style,
}) => {
  if (isHidden) {
    return null;
  }

  return (
    <div
      style={style}
      className={`text-block ${isNumber ? 'number-cell' : ''}`}
    >
      {isHidden && <p>hidden</p>}
      <p className={largeText ? 'large-text' : ''}>{dataContent}</p>
    </div>
  );
};

DataCellText.propTypes = {
  dataContent: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  isNumber: PropTypes.bool,
  largeText: PropTypes.bool,
  isHidden: PropTypes.bool,
  style: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

DataCellText.defaultProps = {
  dataContent: '',
  isNumber: false,
  largeText: false,
  isHidden: false,
  style: '',
};

export default DataCellText;
