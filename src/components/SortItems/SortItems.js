import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// Constants
import { DIRECTION_VALUES } from 'constants/constants';

const useStyles = makeStyles({
  iconSort: {
    marginLeft: '0.2rem',
    cursor: 'pointer',
    '&:hover': {
      opacity: '0.5',
    },
  },
  selected: {
    opacity: props => (props.sortState === '' ? '0.2' : '1'),
    color: props => (props.sortState === '' ? 'initial' : 'aqua'),
  },
});

const SortItems = ({ fieldName, sortState, sortDataAction }) => {
  const { DESCENDING_DIRECTION } = DIRECTION_VALUES;
  const classes = useStyles({ sortState });

  const sortBy = ({ shiftKey }) => {
    sortDataAction(fieldName, shiftKey);
  };

  return (
    <Grid container item>
      {sortState !== DESCENDING_DIRECTION && (
        <ExpandLessIcon
          aria-label="sort ascending"
          size="small"
          className={`${classes.iconSort} ${classes.selected}`}
          onClick={sortBy}
        />
      )}

      {sortState === DESCENDING_DIRECTION && (
        <ExpandMoreIcon
          aria-label="sort ascending"
          size="small"
          className={`${classes.iconSort} ${classes.selected}`}
          onClick={sortBy}
        />
      )}
    </Grid>
  );
};

SortItems.propTypes = {
  fieldName: PropTypes.string.isRequired,
  sortState: PropTypes.string,
  sortDataAction: PropTypes.func,
};

SortItems.defaultProps = {
  sortState: '',
  sortDataAction: undefined,
};

export default SortItems;
