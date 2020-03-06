import React from 'react';
import PropTypes from 'prop-types';

// Components
import HeaderDataCell from 'components/HeaderDataCell/HeaderDataCell';

// Styles
import './HeaderDataGrid.scss';

const HeaderDataGrid = ({ data }) => {
  console.log('in HeaderDataGrid', data);

  return (
    <div className="header-data-grid">
      <table className="header-data-grid--table">
        <thead>
          <tr className="header-data-grid--row">
            <HeaderDataCell title="Avatar" />
            <HeaderDataCell title="Name" isSortable isSearchable />
            <HeaderDataCell title="Score" isSortable isSearchable />
            <HeaderDataCell title="RegisterDate" isSortable />
            <HeaderDataCell title="LastVisit" isSortable />
            <HeaderDataCell title="Status" />
            <HeaderDataCell title="Instant" />
            <HeaderDataCell title="Money currencySymbol" />
            <HeaderDataCell title="Mentor" />
          </tr>
        </thead>
      </table>
    </div>
  );
};

HeaderDataGrid.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

HeaderDataGrid.defaultProps = {
  data: [],
};

export default HeaderDataGrid;
