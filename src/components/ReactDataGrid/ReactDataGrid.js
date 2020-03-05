import React from 'react';
import PropTypes from 'prop-types';

// Components
import HeaderDataGrid from 'components/HeaderDataGrid/HeaderDataGrid';
import ContentDataGrid from 'components/ContentDataGrid/ContentDataGrid';

// Styles
import './ReactDataGrid.scss';

const ReactDataGrid = ({ data }) => {
  console.log('ReactDataGrid data: ', data);

  return (
    <div className="react-data-grid">
      <HeaderDataGrid data={data} />
      <ContentDataGrid data={data} />
    </div>
  );
};

ReactDataGrid.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

ReactDataGrid.defaultProps = {
  data: [],
};

export default ReactDataGrid;
