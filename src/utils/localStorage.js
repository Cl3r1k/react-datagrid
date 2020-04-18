export const APP_STATE_IDENTIFIER = 'state';

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem(APP_STATE_IDENTIFIER);

    if (serializedState === null) {
      return undefined;
    }

    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(APP_STATE_IDENTIFIER, serializedState);
  } catch (err) {
    // ignore write errors
  }
};
