import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
  selectBlock: {
    padding: '5px',
    position: 'relative',
  },
  sticky: {
    backgroundColor: theme.palette.common.white,
  },
  indexText: {
    position: 'absolute',
    left: 0,
    top: 0,
    fontSize: '0.65rem',
    color: theme.palette.primary.light,
  },
}));

const DataCellSelect = ({
  index,
  selectState,
  id,
  className,
  style,
  setSelectionAction,
}) => {
  const classes = useStyles();

  const handleChange = () => {
    setSelectionAction(id);
  };

  return (
    <Grid
      container
      justify="center"
      className={clsx(
        classes.selectBlock,
        className,
        className === 'sticky' && classes.sticky
      )}
      style={style}
    >
      {index !== undefined && (
        <Box component="span" className={classes.indexText}>
          index: {index}
        </Box>
      )}
      <Checkbox
        checked={selectState}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'selected checkbox' }}
      />
    </Grid>
  );
};

DataCellSelect.propTypes = {
  index: PropTypes.number,
  selectState: PropTypes.bool,
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  setSelectionAction: PropTypes.func,
  style: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

DataCellSelect.defaultProps = {
  index: undefined,
  selectState: false,
  className: '',
  setSelectionAction: undefined,
  style: '',
};

export default DataCellSelect;
