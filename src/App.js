import React from 'react';

// Modules
import { generateFakeData } from 'utils/dataUtils';

// Components
import ReactDataGrid from 'components/ReactDataGrid/ReactDataGrid';

// Styles
import './App.scss';

function App() {
  const fakeData = generateFakeData();

  return (
    <div className="app wrapper">
      <ReactDataGrid data={fakeData} />
    </div>
  );
}

export default App;
