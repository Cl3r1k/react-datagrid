import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './SettingVisibility.scss';

const SettingVisibility = ({ hiddenColumns, setVisibilityAction }) => {
  const handleChange = ({ currentTarget: { checked } }, name) => {
    setVisibilityAction(name, !checked);
  };

  return (
    <div className="setting-delete-block">
      <p>Columns visibility</p>
      {Object.keys(hiddenColumns).map(key => (
        <label key={key} htmlFor={`visible-${key}`}>
          <input
            type="checkbox"
            id={`visible-${key}`}
            checked={!hiddenColumns[key]}
            onChange={evt => handleChange(evt, key)}
          />
          {key}
        </label>
      ))}
    </div>
  );
};

SettingVisibility.propTypes = {
  hiddenColumns: PropTypes.objectOf(PropTypes.bool),
  setVisibilityAction: PropTypes.func,
};

SettingVisibility.defaultProps = {
  hiddenColumns: {},
  setVisibilityAction: undefined,
};

export default SettingVisibility;
