import React from 'react';
import PropTypes from 'prop-types';

// STyles
import './DataCellSelect.scss';

const DataCellSelect = ({ selectState, id, style, setSelectionAction }) => {
  const handleChange = () => {
    setSelectionAction(id);
  };

  return (
    <div className="select-block" style={style}>
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
  setSelectionAction: PropTypes.func,
  style: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

DataCellSelect.defaultProps = {
  selectState: false,
  setSelectionAction: undefined,
  style: '',
};

export default DataCellSelect;
