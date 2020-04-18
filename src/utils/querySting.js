import { initialState as initialStateFilter } from 'reducers/filterReducer';
import { initialState as initialStateSort } from 'reducers/sortReducer';

export const queryStringParse = () => {
  const paramsString = window.location.search;

  const parsedParams = {};
  if (paramsString && paramsString.startsWith('?')) {
    const paramsArray = paramsString.substr(1).split('&');
    paramsArray.forEach(param => {
      const [key, value] = param.split('=');
      parsedParams[key] = key === 'filterEnums' ? value.split(',') : value;
    });

    const resultState = {
      sortState: { ...initialStateSort },
      filterState: { ...initialStateFilter, ...parsedParams },
    };

    return resultState;
  }

  return undefined;
};
