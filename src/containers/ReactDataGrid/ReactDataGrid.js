import React from 'react';

// Modules
import { generateFakeData } from 'utils/dataUtils';

// Components
// import HeaderDataGrid from 'components/HeaderDataGrid/HeaderDataGrid';
import ContentDataGrid from 'components/ContentDataGrid/ContentDataGrid';

// Styles
import './ReactDataGrid.scss';

const ReactDataGrid = () => {
  const fakeData = generateFakeData();
  console.log('%c ReactDataGrid data: ', 'color: blue', fakeData);

  return (
    <div className="react-data-grid">
      {/* <HeaderDataGrid /> */}
      <ContentDataGrid data={fakeData} />
    </div>
  );
};

export default ReactDataGrid;
