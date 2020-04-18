import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import SaveAltIcon from '@material-ui/icons/SaveAlt';

// Modules
import { CSVLink } from 'react-csv';

export const CSVExport = ({ csvData }) => {
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
  csvData: PropTypes.arrayOf(PropTypes.object),
};

CSVExport.defaultProps = {
  csvData: [],
};
