import React from 'react';

// Containers
import AppActions from 'components/AppActions/AppActions';
import ReactDataGrid from 'components/ReactDataGrid/ReactDataGrid';

// Styles
import './App.scss';

const App = () => {
  return (
    <div className="app wrapper">
      <AppActions />
      <ReactDataGrid />
    </div>
  );
};

export default App;
