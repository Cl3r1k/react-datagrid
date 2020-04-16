import * as actionTypes from 'constants/actionTypes';

export const setVirtualization = virtualizationState => {
  return dispatch => {
    dispatch({
      type: actionTypes.SET_VIRTUALIZATION,
      payload: virtualizationState,
    });
  };
};

export const setVisibility = (fieldName, hiddenState) => {
  return dispatch => {
    dispatch({
      type: actionTypes.SET_HIDDEN_COLUMNS,
      payload: {
        fieldName,
        hiddenState,
      },
    });
  };
};
