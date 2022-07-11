import dotenv from 'dotenv';

dotenv.config();

const testFunc = async () => {
  console.log('Hello world');
};

const main = async () => {
  testFunc();
};

main();
