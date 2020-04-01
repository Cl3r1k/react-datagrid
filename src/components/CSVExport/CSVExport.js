import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import SaveAltIcon from '@material-ui/icons/SaveAlt';

// Modules
import { CSVLink } from 'react-csv';

const CSVExport = () => {
  // TODO: To implement
  // const csvData = excludedData.map(item => {
  //   const filteredItem = {};
  //   Object.keys(item).forEach((key, index) => {
  //     if (!MAP[index].isHidden && !searchState.hiddenColumns[key]) {
  //       if (typeof item[key] === 'object') {
  //         filteredItem[key] = Object.values(item[key]).join(' ');
  //       } else {
  //         filteredItem[key] = item[key];
  //       }
  //     }
  //   });

  //   return filteredItem;
  // });

  return (
    <Grid item>
      <CSVLink
        className="csv-link"
        data="to fix me"
        // data={csvData}
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

export default CSVExport;
