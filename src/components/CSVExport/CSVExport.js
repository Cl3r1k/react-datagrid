import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import SaveAltIcon from '@material-ui/icons/SaveAlt';

// Modules
import { CSVLink } from 'react-csv';

// Constants
import { MAP } from 'config/default';

export const CSVExport = ({ data, hiddenColumns }) => {
  const csvData = data.map(item => {
    const filteredItem = {};
    Object.keys(item).forEach((key, index) => {
      if (!MAP[index].isHidden && !hiddenColumns[key]) {
        if (typeof item[key] === 'object') {
          filteredItem[key] = Object.values(item[key]).join(' ');
        } else {
          filteredItem[key] = item[key];
        }
      }
    });

    return filteredItem;
  });

  return (
    <Grid item>
      <CSVLink
        className="csv-link"
        data={csvData}
        filename="data-grid.csv"
        target="_blank"
        style={{ textDecoration: 'none' }}
      >
        <Button variant="outlined" startIcon={<SaveAltIcon />}>
          Export to CSV
        </Button>
      </CSVLink>
    </Grid>
  );
};

CSVExport.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  hiddenColumns: PropTypes.arrayOf(PropTypes.object),
};

CSVExport.defaultProps = {
  data: [],
  hiddenColumns: [],
};
