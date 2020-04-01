import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import LinkIcon from '@material-ui/icons/Link';

const SettingQueryString = () => {
  return (
    <Grid item>
      <Link href="?filterEnums=Mentor&globalSearchValue=Man">
        <Button variant="outlined" startIcon={<LinkIcon />}>
          QueryString
        </Button>
      </Link>
    </Grid>
  );
};

export default SettingQueryString;
