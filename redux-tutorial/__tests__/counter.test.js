const addCounter = list => {
  return [...list, 0];
};

const removeCounter = (list, index) => {
  return [...list.slice(0, index), ...list.slice(index + 1)];
};

const incrementCounter = (list, index) => {
  return [...list.slice(0, index), list[index] + 1, ...list.slice(index + 1)];
};

const deepFreeze = require('deep-freeze');

const testRemoveCounter = () => {
  const listBefore = [0, 10, 20];
  const listAfter = [0, 20];

  deepFreeze(listBefore);

  test('testing...', () => {
    expect(removeCounter(listBefore, 1)).toEqual(listAfter);
  });
};

const testAddCounter = () => {
  const listBefore = [];
  const listAfter = [0];

  deepFreeze(listBefore);

  test('testing...', () => {
    expect(addCounter(listBefore)).toEqual(listAfter);
  });
};

const testIncrementCounter = () => {
  const listBefore = [0, 10, 20];
  const listAfter = [0, 11, 20];

  deepFreeze(listBefore);

  test('test..', () => {
    expect(incrementCounter(listBefore, 1)).toEqual(listAfter);
  });
};

testAddCounter();
testRemoveCounter();
testIncrementCounter();
console.log('All tests passed!');
