import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './DataCellText.scss';

const DataCellText = ({
  dataContent,
  isNumber,
  isHidden,
  className,
  style,
}) => {
  if (isHidden) {
    return null;
  }

  return (
    <div
      style={style}
      className={`text-block ${isNumber ? 'number-cell' : ''} ${className}`}
    >
      {isHidden && <p>hidden</p>}
      <p className="cell-text">{dataContent}</p>
    </div>
  );
};

DataCellText.propTypes = {
  dataContent: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  isNumber: PropTypes.bool,
  isHidden: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

DataCellText.defaultProps = {
  dataContent: '',
  isNumber: false,
  isHidden: false,
  className: '',
  style: '',
};

export default DataCellText;
