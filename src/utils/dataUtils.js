// Modules
import Faker from 'faker';

// Constants
import { DEFAULT_CONFIG } from 'config/default';

export const generateFakeData = () => {
  const { DATA_LENGTH, MAX_SCORE, MAX_AMOUNT } = DEFAULT_CONFIG;

  return new Array(DATA_LENGTH).fill(0).map(el => ({
    id: Faker.random.uuid(),
    avatar: Faker.image.avatar(),
    name: Faker.internet.userName(),
    score: Faker.random.number(MAX_SCORE),
    registerDate: Faker.date.recent().toLocaleDateString(),
    lastVisit: Faker.date.weekday(),
    status: 'active',
    instant: new Date().getTime(),
    money: {
      currency: Faker.finance.currencyName(),
      currencySymbol: Faker.finance.currencySymbol(),
      amount: Faker.random.number(MAX_AMOUNT),
    },
    mentor: !!el,
  }));
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
