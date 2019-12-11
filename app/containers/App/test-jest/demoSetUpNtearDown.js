let numberOfTest = 0;

export const preTesting = () => console.log('start testing');

export const postTesting = () => {
  console.log('testing done');
  numberOfTest += 1;
};

export const get = () => {
  console.log(numberOfTest);
};

export const set = val => {
  numberOfTest = val;
  console.log(numberOfTest);
};
