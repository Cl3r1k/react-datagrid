import {
  SORT_DATA_REQUEST,
  SORT_DATA_SUCCESS,
  SORT_DATA_FAIL,
} from 'actions/sortActions';
import { DIRECTION_VALUES } from 'utils/constants';

const initialState = {
  sortName: '',
  sortDirection: DIRECTION_VALUES.DEFAULT_DIRECTION,
  error: '',
  isSorting: false,
};

export const sortReducer = (state = initialState, action) => {
  switch (action.type) {
    case SORT_DATA_REQUEST:
      return {
        ...state,
        sortName: action.payload,
        sortDirection: DIRECTION_VALUES.DEFAULT_DIRECTION,
        isSorting: true,
        error: '',
      };

    case SORT_DATA_SUCCESS:
      return {
        ...state,
        sortName: action.payload.sortName,
        sortDirection: action.payload.sortDirection,
        isSorting: false,
        error: '',
      };

    case SORT_DATA_FAIL:
      return { ...state, error: action.payload, isSorting: false };

    default:
      return state;
  }
};
