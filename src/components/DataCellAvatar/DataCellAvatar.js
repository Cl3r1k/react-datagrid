import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({
  avatarBlock: {
    padding: '5px',
  },
  smallImage: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  sticky: {
    backgroundColor: '#ffffff',
  },
}));

const DataCellAvatar = ({ imageUrl, className, style }) => {
  const classes = useStyles();
  return (
    <Grid
      container
      alignItems="center"
      className={clsx(
        classes.avatarBlock,
        className,
        className === 'sticky' && classes.sticky
      )}
      style={style}
    >
      <Avatar
        className={classes.smallImage}
        alt="avatar image"
        src={imageUrl}
      />
    </Grid>
  );
};

DataCellAvatar.propTypes = {
  imageUrl: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

DataCellAvatar.defaultProps = {
  imageUrl: '',
  className: '',
  style: '',
};

export default DataCellAvatar;
