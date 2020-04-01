import { createMuiTheme } from '@material-ui/core/styles';
// import purple from '@material-ui/core/colors/purple';
import red from '@material-ui/core/colors/red';
import grey from '@material-ui/core/colors/grey';

const theme = createMuiTheme({
  palette: {
    // primary: purple,
    secondary: red,
  },
  text: {
    light: grey[100],
  },
  status: {
    default: 'red',
  },
});

export default theme;
