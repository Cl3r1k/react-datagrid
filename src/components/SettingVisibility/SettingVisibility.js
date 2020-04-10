import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { MenuItem } from '@material-ui/core';

const SettingVisibility = ({ hiddenColumns, setVisibilityAction }) => {
  const [anchorEl, setAnchorElement] = useState(null);
  const open = Boolean(anchorEl);

  const handleChange = ({ currentTarget: { checked } }, name) => {
    setVisibilityAction(name, !checked);
  };

  const handleClick = event => {
    setAnchorElement(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorElement(null);
  };

  return (
    <Grid item>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu anchorEl={anchorEl} keepMounted open={open} onClose={handleClose}>
        {Object.keys(hiddenColumns).map(key => (
          <MenuItem key={key}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={!hiddenColumns[key]}
                  onChange={evt => handleChange(evt, key)}
                />
              }
              label={key}
            />
          </MenuItem>
        ))}
      </Menu>
    </Grid>
  );
};

SettingVisibility.propTypes = {
  hiddenColumns: PropTypes.objectOf(PropTypes.bool),
  setVisibilityAction: PropTypes.func,
};

SettingVisibility.defaultProps = {
  hiddenColumns: {},
  setVisibilityAction: undefined,
};

export default SettingVisibility;
