import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';

// Store
import { store } from 'store/configureStore';

// Actions
import { fetchData } from 'actions/fetchData';

// Theme
import theme from 'config/theme';

// Modules
import * as serviceWorker from './serviceWorker';

// Components
import App from './App';

// Styles
import './index.scss';

// Initial fetch
store.dispatch(fetchData());

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
