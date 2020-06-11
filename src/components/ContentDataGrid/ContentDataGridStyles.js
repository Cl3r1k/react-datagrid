import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(defaultTheme => ({
  contentDataGrid: {
    flexWrap: 'noWrap',
    flexDirection: 'column',
    // display: 'grid',
    // gridTemplateRows: 'auto 1fr',
    // alignItems: 'flex-start',
    // alignContent: 'flex-start',
    // overflow: 'auto',
    // padding: '5px',
    height: '100%',
    width: '100%',
    boxSizing: 'border-box',
    position: 'relative',
    // backgroundColor: '#ffffff',
    // backgroundColor: 'teal',
  },
  tableWrapper: {
    width: '100%',
    // height: '600px',
    overflow: 'auto',
    height: '100%',
  },
  styledScrollBar: {
    // * Scrollbars with styles
    // The emerging W3C standard that is currently Firefox-only
    scrollbarWidth: 'thin',
    scrollbarColor: `${defaultTheme.palette.primary.light} ${defaultTheme.color.grayed}`,

    /* Works on Chrome/Edge/Safari */
    '&::-webkit-scrollbar': {
      width: '10px',
      height: '10px',
    },
    '&::-webkit-scrollbar-track': {
      backgroundColor: defaultTheme.color.grayed,
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: '10px',
      backgroundColor: defaultTheme.palette.primary.light,
      border: `3px solid ${defaultTheme.color.grayed}`,
    },
  },
  backDropRoot: {
    zIndex: '100',
  },
}));
