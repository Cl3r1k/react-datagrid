import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

// Modules
import { generateFakeData } from 'utils/dataUtils';

// Containers
import ContentDataGrid from 'containers/ContentDataGrid/ContentDataGrid';

// Styles
// import './ReactDataGrid.scss';

const useStyles = makeStyles({
  reactDataGrid: {
    backgroundColor: '#ffffff',
    height: '100%',
  },
});

const ReactDataGrid = () => {
  const classes = useStyles();
  const fakeData = generateFakeData();

  return (
    // <div className="react-data-grid">
    //   <Settings />
    //   <ContentDataGrid data={fakeData} />
    // </div>
    <Grid container item direction="column" className={classes.reactDataGrid}>
      <ContentDataGrid data={fakeData} />
    </Grid>
  );
};

export default ReactDataGrid;
