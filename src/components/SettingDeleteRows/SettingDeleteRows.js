import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './SettingDeleteRows.scss';

const SettingDeleteRows = ({ selectionState, deleteRowsAction }) => {
  return (
    <div className="setting-delete-block">
      <button
        className={`button-styled ${!selectionState ? 'disabled-button' : ''}`}
        type="button"
        onClick={deleteRowsAction}
        disabled={!selectionState}
      >
        Delete selected rows
      </button>
    </div>
  );
};

SettingDeleteRows.propTypes = {
  selectionState: PropTypes.bool,
  deleteRowsAction: PropTypes.func,
};

SettingDeleteRows.defaultProps = {
  selectionState: false,
  deleteRowsAction: undefined,
};

export default SettingDeleteRows;
