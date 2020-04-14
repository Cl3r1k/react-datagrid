import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

// Containers
import { FiltersContainer } from 'containers/FiltersContainer';

// Components
import { ReactDataGrid } from 'components/ReactDataGrid/ReactDataGrid';

// Themes
import themeDark from 'config/themeDark';

const useStyles = makeStyles(defaultTheme => ({
  appRoot: {
    height: '100vh',
    padding: '20px',
    boxSizing: 'border-box',
    backgroundColor: '#3f51b508',
    boxShadow: defaultTheme.shadows[20],
  },
  appWrapper: {
    height: '100%',
    width: '100%',
    overflow: 'hidden',
  },
  filtersContainer: {
    padding: '20px 15px',
    backgroundColor: themeDark.palette.secondary.main,
    color: themeDark.palette.primary.main,
  },
  tableContainer: {
    backgroundColor: defaultTheme.color.grayed,
    padding: '25px 35px',
    height: '100%',
  },
  height100Percent: {
    height: '100%',
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.appRoot}>
      <Paper elevation={5} className={classes.appWrapper}>
        <Grid container className={classes.height100Percent}>
          <ThemeProvider theme={themeDark}>
            <Grid
              container
              item
              direction="column"
              xs={12}
              sm={3}
              md={2}
              className={classes.filtersContainer}
            >
              <FiltersContainer />
            </Grid>
          </ThemeProvider>
          <Grid
            container
            item
            xs={12}
            sm={9}
            md={10}
            className={classes.tableContainer}
          >
            <ReactDataGrid />
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default App;
