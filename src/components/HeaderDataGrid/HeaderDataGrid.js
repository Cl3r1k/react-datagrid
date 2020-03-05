import React from 'react';
import PropTypes from 'prop-types';

const HeaderDataGrid = ({ data }) => {
  console.log('in HeaderDataGrid', data);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Name</th>
            <th>Score</th>
            <th>RegisterDate</th>
            <th>LastVisit</th>
            <th>Status</th>
            <th>Instant</th>
            <th>Money currencySymbol</th>
            <th>Mentor</th>
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
