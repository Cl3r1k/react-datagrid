// Modules
import Faker from 'faker';

// Constants
import { DEFAULT_CONFIG, ENUM_CONFIG } from 'config/default';

const ACTIVE_TOGGLE = 1;
const TOGGLE_FIELD = 'active';
const ENUM_FIELD = 'type';

const { DATA_LENGTH, MAX_SCORE, MAX_AMOUNT } = DEFAULT_CONFIG;

const getRandomEnumValue = () => {
  return ENUM_CONFIG[Math.floor((Math.random() * 10) % ENUM_CONFIG.length)];
};

const generateFakeRecord = () => {
  return {
    id: Faker.random.uuid(),
    avatar: Faker.image.avatar(),
    name: Faker.internet.userName(),
    score: Faker.random.number(MAX_SCORE),
    registerDate: Faker.date.recent().toLocaleDateString(),
    lastVisit: Faker.date.weekday(),
    type: getRandomEnumValue(),
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

const filterByEnums = (data, filterEnums) => {
  // console.log('filterByEnums filterEnums:', filterEnums);
  return data.filter(item => filterEnums.includes(item[ENUM_FIELD]));
};

const filterByToggle = (data, filterToggle) => {
  console.log('filterByToggle filterToggle:', filterToggle);

  return data.filter(item => {
    return (
      (item[TOGGLE_FIELD] && filterToggle === ACTIVE_TOGGLE) ||
      (!item[TOGGLE_FIELD] && filterToggle !== ACTIVE_TOGGLE)
    );
  });

  // const toggleItem =
  //     (item[TOGGLE_FIELD] && filterToggle === ACTIVE_TOGGLE) ||
  //     (!item[TOGGLE_FIELD] && filterToggle !== ACTIVE_TOGGLE);
  //   // console.log('in filterData - toggleItem', toggleItem);
  //   return item[searchField].toString().includes(searchValue) && toggleItem;
};

export const filterData = (
  data,
  searchField,
  searchValue,
  filterToggle,
  filterEnums
) => {
  console.log(
    `in filterData searchField: ${searchField}, searchValue: ${searchValue}`
  );

  let filteredData = [...data];

  if (searchField) {
    // console.log('filtering...???');
    filteredData = filteredData.filter(item => {
      // console.log('item[searchField]', item[searchField]);
      // console.log('item[searchField].toString()', item[searchField].toString());
      // console.log(
      //   'item[searchField].toString().includes(searchValue)',
      //   item[searchField].toString().includes(searchValue)
      // );

      return item[searchField].toString().includes(searchValue);
    });

    console.log('%c filteredData: ', 'color: pink', filteredData);
    return filteredData;
  }

  if (filterEnums.length) {
    filteredData = filterByEnums(filteredData, filterEnums);
  }

  if (filterToggle) {
    console.log('in filterData - filterToggle', filterToggle);
    filteredData = filterByToggle(filteredData, filterToggle);
  }

  return filteredData;
};
