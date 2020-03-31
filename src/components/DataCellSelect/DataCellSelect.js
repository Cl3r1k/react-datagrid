import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';

// STyles
import './DataCellSelect.scss';

const useStyles = makeStyles({
  selectBlock: {
    padding: '5px',
  },
  sticky: {
    backgroundColor: '#ffffff',
  },
});

const DataCellSelect = ({
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
    // <div className={`select-block ${className}`} style={style}>
    //   <input
    //     type="checkbox"
    //     className="select-item"
    //     checked={selectState}
    //     onChange={handleChange}
    //   />
    // </div>
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
      <Checkbox
        checked={selectState}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'selected checkbox' }}
      />
    </Grid>
  );
};

DataCellSelect.propTypes = {
  selectState: PropTypes.bool,
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  setSelectionAction: PropTypes.func,
  style: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

DataCellSelect.defaultProps = {
  selectState: false,
  className: '',
  setSelectionAction: undefined,
  style: '',
};

export default DataCellSelect;
