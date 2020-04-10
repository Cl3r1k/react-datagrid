import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
  objectBlock: {
    padding: '5px',
    color: '#5050e6',
  },
  spanItem: {
    margin: '0 2px',
  },
});

const DataCellObject = ({ data, style }) => {
  const classes = useStyles();

  return (
    <Grid
      container
      justify="flex-end"
      alignItems="center"
      className={classes.objectBlock}
      style={style}
    >
      {Object.keys(data).map(key => (
        <Box component="span" key={key} className={classes.spanItem}>
          {data[key]}
        </Box>
      ))}
    </Grid>
  );
};

DataCellObject.propTypes = {
  data: PropTypes.shape({
    currencySymbol: PropTypes.string,
    amount: PropTypes.number,
  }),
  style: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

DataCellObject.defaultProps = {
  data: {},
  style: '',
};

export default DataCellObject;
