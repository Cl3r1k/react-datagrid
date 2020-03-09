const initialState = {
  sortName: '',
  error: '',
  isFiltered: false,
};

export const sortReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SOME_SORT_TYPE':
      return { ...state, sortName: action.payload };

    default:
      return state;
  }
};
