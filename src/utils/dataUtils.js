// Modules
import Faker from 'faker';

// Constants
import { DEFAULT_CONFIG } from 'config/default';

const { DATA_LENGTH, MAX_SCORE, MAX_AMOUNT } = DEFAULT_CONFIG;

const generateFakeRecord = () => {
  return {
    id: Faker.random.uuid(),
    avatar: Faker.image.avatar(),
    name: Faker.internet.userName(),
    score: Faker.random.number(MAX_SCORE),
    registerDate: Faker.date.recent().toLocaleDateString(),
    lastVisit: Faker.date.weekday(),
    role: 'active',
    instant: new Date().getTime(),
    money: {
      currency: Faker.finance.currencyName(),
      currencySymbol: Faker.finance.currencySymbol(),
      amount: Faker.random.number(MAX_AMOUNT),
    },
    active: !(Math.floor(Math.random() * 10) % 2),
  };
};

export const generateFakeData = () => {
  return Array.from({ length: DATA_LENGTH }, () => generateFakeRecord());
};

export const sortDataByFieldName = (data, sortName, sortDirection) => {
  console.log(
    `in sortDataByFieldName sortName: ${sortName}, sortDirection: ${sortDirection}`
  );

  if (sortName) {
    const SORT_DIRECTION_FLAG = -1;
    const sortValue =
      sortDirection > 0 ? -SORT_DIRECTION_FLAG : SORT_DIRECTION_FLAG;
    const sortedData = [...data].sort((a, b) => {
      if (b[sortName] > a[sortName]) {
        return -1 * sortValue;
      }
      if (b[sortName] < a[sortName]) {
        return 1 * sortValue;
      }

      return 0;
    });

    console.log('%c sortedData: ', 'color: pink', sortedData);
    return sortedData;
  }

  return data;
};

export const filterData = (data, searchField, searchValue, filterToggle) => {
  const ACTIVE_TOGGLE = 1;
  const TOGGLE_FIELD = 'active';

  console.log(
    `in filterData searchField: ${searchField}, searchValue: ${searchValue}`
  );

  if (searchField) {
    // console.log('filtering...???');
    const filteredData = [...data].filter(item => {
      // console.log('item[searchField]', item[searchField]);
      // console.log('item[searchField].toString()', item[searchField].toString());
      // console.log(
      //   'item[searchField].toString().includes(searchValue)',
      //   item[searchField].toString().includes(searchValue)
      // );
      if (filterToggle) {
        console.log('in filterData - filterToggle', filterToggle);
        const toggleItem =
          (item[TOGGLE_FIELD] && filterToggle === ACTIVE_TOGGLE) ||
          (!item[TOGGLE_FIELD] && filterToggle !== ACTIVE_TOGGLE);
        // console.log('in filterData - toggleItem', toggleItem);
        return item[searchField].toString().includes(searchValue) && toggleItem;
      }

      return item[searchField].toString().includes(searchValue);
    });

    console.log('%c filteredData: ', 'color: pink', filteredData);
    return filteredData;
  }

  return data;
};
