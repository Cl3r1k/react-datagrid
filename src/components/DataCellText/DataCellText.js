import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

// Styles
import './DataCellText.scss';

const useStyles = makeStyles({
  textBlock: {
    padding: '5px',
  },
  numberCell: {
    justifyContent: 'flex-end',
    color: '#319781',
    // fontWeight: 700,
  },
  cellText: {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
  sticky: {
    backgroundColor: '#ffffff',
    borderRight: '1px solid #bfbfbf',
  },
});

const DataCellText = ({
  dataContent,
  isNumber,
  isHidden,
  className,
  style,
}) => {
  const classes = useStyles();

  if (isHidden) {
    return null;
  }

  return (
    // <div
    //   style={style}
    //   className={`text-block ${isNumber ? 'number-cell' : ''} ${className}`}
    // >
    //   {isHidden && <p>hidden</p>}
    //   <p className="cell-text">{dataContent}</p>
    // </div>
    <Grid
      container
      alignItems="center"
      className={clsx(
        classes.textBlock,
        className,
        className === 'sticky' && classes.sticky,
        isNumber && classes.numberCell
      )}
      style={style}
    >
      <Typography variant="body1" className={classes.cellText}>
        {dataContent}
      </Typography>
    </Grid>
  );
};

DataCellText.propTypes = {
  dataContent: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  isNumber: PropTypes.bool,
  isHidden: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

DataCellText.defaultProps = {
  dataContent: '',
  isNumber: false,
  isHidden: false,
  className: '',
  style: '',
};

export default DataCellText;
