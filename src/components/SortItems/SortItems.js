import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// Constants
import { DIRECTION_VALUES } from 'constants/constants';

const useStyles = makeStyles(theme => ({
  sortBlock: {
    flexWrap: 'nowrap',
  },
  iconSort: {
    marginLeft: '0.2rem',
    cursor: 'pointer',
    '&:hover': {
      opacity: '0.5',
    },
  },
  selected: {
    opacity: props => (props.sortState === '' ? '0.2' : '1'),
    color: props =>
      props.sortState === '' ? 'initial' : theme.palette.primary.main,
  },
  sortOrderText: {
    fontSize: '0.6rem',
    color: theme.palette.secondary.light,
  },
}));

const SortItems = ({ fieldName, sortState, sortOrder, sortDataAction }) => {
  const { DESCENDING_DIRECTION } = DIRECTION_VALUES;
  const classes = useStyles({ sortState });

  const sortBy = ({ shiftKey }) => {
    sortDataAction(fieldName, shiftKey);
  };

  return (
    <Grid container item alignItems="center" className={classes.sortBlock}>
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
      {sortOrder !== -1 && (
        <Box component="span" className={classes.sortOrderText}>
          {sortOrder + 1}
        </Box>
      )}
    </Grid>
  );
};

SortItems.propTypes = {
  fieldName: PropTypes.string.isRequired,
  sortState: PropTypes.string,
  sortOrder: PropTypes.number,
  sortDataAction: PropTypes.func,
};

SortItems.defaultProps = {
  sortState: '',
  sortOrder: -1,
  sortDataAction: undefined,
};

export default SortItems;
