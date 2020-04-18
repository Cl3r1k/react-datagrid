import * as actionTypes from 'constants/actionTypes';

const initialState = {
  virtualizationState: true,
  hiddenColumns: {
    name: false,
    score: false,
    registerDate: false,
    lastVisit: false,
  },
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_VIRTUALIZATION:
      return { ...state, virtualizationState: action.payload };

    case actionTypes.SET_HIDDEN_COLUMNS:
      return {
        ...state,
        hiddenColumns: {
          ...state.hiddenColumns,
          [action.payload.fieldName]: action.payload.hiddenState,
        },
      };

    default:
      return state;
  }
};
