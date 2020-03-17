import React from 'react';

// Components
import Filters from 'containers/Filters/Filters';
import Settings from 'containers/Settings/Settings';

// Styles
import './AppActions.scss';

const AppActions = () => {
  return (
    <div className="actions-container">
      <Filters />
      <Settings />
    </div>
  );
};

export default AppActions;
