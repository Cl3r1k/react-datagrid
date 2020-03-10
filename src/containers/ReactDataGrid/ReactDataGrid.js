import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Modules
import { generateFakeData } from 'utils/dataUtils';

// Actions
import { searchData } from 'actions/searchActions';

// Components
import HeaderDataGrid from 'components/HeaderDataGrid/HeaderDataGrid';
import ContentDataGrid from 'components/ContentDataGrid/ContentDataGrid';

// Styles
import './ReactDataGrid.scss';

const ReactDataGrid = props => {
  const { searchDataAction } = props;
  const fakeData = generateFakeData();
  console.log('props', props);

  console.log('ReactDataGrid data: ', fakeData);

  return (
    <div className="react-data-grid">
      <HeaderDataGrid data={fakeData} searchData={searchDataAction} />
      <ContentDataGrid data={fakeData} />
    </div>
  );
};

ReactDataGrid.propTypes = {
  searchDataAction: PropTypes.func.isRequired,
};

const mapStoreToProps = state => {
  return {
    searchState: state.searchState,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    searchDataAction: searchName => dispatch(searchData(searchName)),
  };
};

export default connect(mapStoreToProps, mapDispatchToProps)(ReactDataGrid);
