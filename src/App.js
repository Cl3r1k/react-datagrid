import React from 'react';

// Containers
import Filters from 'containers/Filters/Filters';
import ReactDataGrid from 'containers/ReactDataGrid/ReactDataGrid';

// Styles
import './App.scss';

const App = () => {
  return (
    <div className="app wrapper">
      <Filters />
      <ReactDataGrid />
    </div>
  );
};

export default App;
