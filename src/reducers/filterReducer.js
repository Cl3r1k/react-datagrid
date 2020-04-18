import * as actionTypes from 'constants/actionTypes';

export const initialState = {
  filterKey: '',
  filterValue: '',
  filterGlobalValue: '',
  filterToggleState: 0,
  filterEnums: [],
  isFiltering: false,
  searchPopupName: '', // TODO: Do we need this ????
};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_DATA_REQUEST:
      return {
        ...state,
        filterValue: action.payload,
        isFiltering: true,
      };

    case actionTypes.SEARCH_DATA_SUCCESS:
      return {
        ...state,
        filterKey: action.payload.filterKey,
        filterValue: action.payload.filterValue,
        isFiltering: false,
      };

    case actionTypes.SEARCH_POPUP:
      return { ...state, searchPopupName: action.payload };

    case actionTypes.TOGGLE_STATE:
      return { ...state, filterToggleState: action.payload };

    case actionTypes.SET_ENUM_FILTER_PENDING:
      return { ...state, isFiltering: true };

    case actionTypes.SET_ENUM_FILTER_SUCCESS:
      return {
        ...state,
        filterEnums: action.payload,
        isFiltering: false,
      };

    case actionTypes.GLOBAL_SEARCH_PENDING:
      return { ...state, isFiltering: true };

    case actionTypes.GLOBAL_SEARCH_SUCCESS:
      return {
        ...state,
        filterGlobalValue: action.payload,
        isFiltering: false,
      };

    default:
      return state;
  }
};
