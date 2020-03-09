import React from 'react';
import { connect } from 'react-redux';

// Modules
import { generateFakeData } from 'utils/dataUtils';

// Actions
import { filterData } from 'actions/filterActions';

// Components
import HeaderDataGrid from 'components/HeaderDataGrid/HeaderDataGrid';
import ContentDataGrid from 'components/ContentDataGrid/ContentDataGrid';

// Styles
import './ReactDataGrid.scss';

const ReactDataGrid = props => {
  const fakeData = generateFakeData();
  console.log('props', props);

  console.log('ReactDataGrid data: ', fakeData);

  return (
    <div className="react-data-grid">
      <HeaderDataGrid data={fakeData} />
      <ContentDataGrid data={fakeData} />
    </div>
  );
};

const mapStoreToProps = state => {
  return {
    filterState: state.filterState,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    filterDataAction: filterName => dispatch(filterData(filterName)),
  };
};

export default connect(mapStoreToProps, mapDispatchToProps)(ReactDataGrid);
