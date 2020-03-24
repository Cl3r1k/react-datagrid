import { SORT_DATA_SUCCESS } from 'actions/sortActions';

export const initialState = {
  sortFields: [],
  sortDirections: [],
  isSorting: false,
};

export const sortReducer = (state = initialState, action) => {
  switch (action.type) {
    case SORT_DATA_SUCCESS:
      return {
        ...state,
        sortFields: action.payload.sortFields,
        sortDirections: action.payload.sortDirections,
        isSorting: false,
      };

    default:
      return state;
  }
};
