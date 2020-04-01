import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

// Containers
import Filters from 'containers/Filters/Filters';

// Components
import ReactDataGrid from 'components/ReactDataGrid/ReactDataGrid';

// Themes
import theme from 'config/themeDark';

// Styles
// import './App.scss';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#c2d6d6',
    height: '100vh',
    padding: '20px',
    boxSizing: 'border-box',
  },
  appWrapper: {
    height: '100%',
    width: '100%',
    overflow: 'hidden',
  },
  filtersContainer: {
    padding: '20px 15px',
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.main,
  },
  tableContainer: {
    backgroundColor: '#f4f4f4',
    padding: '25px 35px',
    height: '100%',
  },
  height100Percent: {
    height: '100%',
  },
});

const App = () => {
  const classes = useStyles();

  return (
    // <Grid container className={classes.root}>
    //   <Paper elevation={5} className={classes.appWrapper}>
    //     <Grid container className={classes.height100Percent}>

    //       <Grid container item xs={3} className={classes.filterPanel}>
    //         <p>some left data</p>
    //       </Grid>

    //       <Grid
    //         container
    //         item
    //         direction="row"
    //         xs={9}
    //         className={classes.tablePanel}
    //       >
    //         <Grid
    //           container
    //           direction="column"
    //           item
    //           xs={12}
    //           className={classes.height100Percent}
    //         >
    //           <Grid className={classes.container}>
    //             <div className={`${classes.sticky} ${classes.preHeader}`}>
    //               EXTRA info
    //             </div>
    //             <div className={`${classes.sticky} ${classes.headerTable}`}>
    //               sticky header
    //             </div>
    //             {Array(30)
    //               .fill(0)
    //               .map((el, index) => (
    //                 <div
    //                   style={{
    //                     height: '40px',
    //                     width: '950px',
    //                     backgroundColor: index % 2 ? '#b36666' : '#7ac194',
    //                   }}
    //                 >
    //                   item {el} - {index}
    //                 </div>
    //               ))}
    //           </Grid>
    //         </Grid>
    //       </Grid>
    //     </Grid>
    //   </Paper>
    // </Grid>

    <Grid
      container
      // justify="center"
      className={classes.root}
    >
      <Paper elevation={5} className={classes.appWrapper}>
        <Grid container className={classes.height100Percent}>
          <ThemeProvider theme={theme}>
            <Grid
              container
              item
              direction="column"
              xs={3}
              className={classes.filtersContainer}
            >
              <Filters />
            </Grid>
          </ThemeProvider>
          <Grid container item xs={9} className={classes.tableContainer}>
            <ReactDataGrid />
            {/* <Grid
              container
              direction="column"
              item
              className={classes.height100Percent}
            >
              <Grid container item className={classes.container}>
                <Grid
                  container
                  item
                  className={`${classes.sticky} ${classes.preHeader}`}
                >
                  EXTRA info
                </Grid>
                <Grid
                  container
                  item
                  className={`${classes.sticky} ${classes.headerTable}`}
                  style={{ flexShrink: '0' }}
                >
                  sticky header
                </Grid>
                {Array(30)
                  .fill(0)
                  .map((el, index) => (
                    <Grid
                      container
                      item
                      style={{
                        height: '40px',
                        width: '950px',
                        backgroundColor: index % 2 ? '#b36666' : '#7ac194',
                        flexShrink: '0',
                      }}
                    >
                      item {el} - {index}
                    </Grid>
                  ))}
              </Grid>
            </Grid> */}
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default App;
