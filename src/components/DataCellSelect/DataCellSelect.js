import React from 'react';
import PropTypes from 'prop-types';

// STyles
import './DataCellSelect.scss';

const DataCellSelect = ({
  selectState,
  id,
  className,
  style,
  setSelectionAction,
}) => {
  const handleChange = () => {
    setSelectionAction(id);
  };

  return (
    <div className={`select-block ${className}`} style={style}>
      <input
        type="checkbox"
        className="select-item"
        checked={selectState}
        onChange={handleChange}
      />
    </div>
  );
};

DataCellSelect.propTypes = {
  selectState: PropTypes.bool,
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  setSelectionAction: PropTypes.func,
  style: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

DataCellSelect.defaultProps = {
  selectState: false,
  className: '',
  setSelectionAction: undefined,
  style: '',
};

export default DataCellSelect;
