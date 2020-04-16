import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
  flagBlock: {
    padding: '5px',
  },
  flagState: {
    width: '15px',
    height: '15px',
    borderRadius: '50%',
    backgroundColor: '#d4a19f',
  },
  active: {
    backgroundColor: '#377ce4',
  },
});

export const DataCellBool = ({ flagState, style }) => {
  const classes = useStyles();

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.flagBlock}
      style={style}
    >
      <Box
        component="div"
        className={`${classes.flagState} ${flagState ? classes.active : ''}`}
      />
    </Grid>
  );
};

DataCellBool.propTypes = {
  flagState: PropTypes.bool,
  style: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

DataCellBool.defaultProps = {
  flagState: false,
  style: '',
};
