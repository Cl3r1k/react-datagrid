import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

// Containers
import { ContentDataGridContainer } from 'containers/ContentDataGridContainer';

const useStyles = makeStyles({
  reactDataGrid: {
    backgroundColor: '#ffffff',
    height: '100%',
  },
});

export const ReactDataGrid = () => {
  const classes = useStyles();

  return (
    <Grid container item direction="column" className={classes.reactDataGrid}>
      <ContentDataGridContainer />
    </Grid>
  );
};
