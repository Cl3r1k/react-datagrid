import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './SettingVirtualization.scss';

const SettingVirtualization = ({
  virtualizationState,
  setVirtualizationAction,
}) => {
  const handleChange = ({ currentTarget: { checked } }) => {
    setVirtualizationAction(checked);
  };

  return (
    <div>
      <label htmlFor="virtualization">
        <input
          type="checkbox"
          id="virtualization"
          checked={virtualizationState}
          onChange={handleChange}
        />
        Virtualization
      </label>
    </div>
  );
};

SettingVirtualization.propTypes = {
  virtualizationState: PropTypes.bool,
  setVirtualizationAction: PropTypes.func,
};

SettingVirtualization.defaultProps = {
  virtualizationState: false,
  setVirtualizationAction: undefined,
};

export default SettingVirtualization;
