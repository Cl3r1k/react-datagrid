import React from 'react';

// Modules
import { generateFakeData } from 'utils/dataUtils';

// Components
import ContentDataGrid from 'containers/ContentDataGrid/ContentDataGrid';

// Styles
import './ReactDataGrid.scss';

const ReactDataGrid = () => {
  const fakeData = generateFakeData();

  return (
    <div className="react-data-grid">
      <ContentDataGrid data={fakeData} />
    </div>
  );
};

export default ReactDataGrid;
