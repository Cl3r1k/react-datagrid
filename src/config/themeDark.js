import { createMuiTheme } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

export const themeDark = createMuiTheme({
  palette: {
    primary: {
      main: grey[100],
    },
    secondary: {
      main: grey[800],
    },
    extra: 'red',
    type: 'dark',
  },
});
