const { expect } = require("chai");
const { makeTransactions } = require("./bankTransactions.js");
const { VALID, INVALID, buildTransaction } = require("./utils/transactions");
const _ = require("lodash");

const test1 = async () => {
  const accounts = {
    1: 100,
    2: 200,
  };
  const transactions = [];

  const correctAccountsAfterTransactions = {
    1: 100,
    2: 200,
  };
  const accountsAfterTransactions = await makeTransactions(
    accounts,
    transactions
  );
  return _.isEqual(correctAccountsAfterTransactions, accountsAfterTransactions);
};

const test2 = async () => {
  const accounts = {
    1: 10,
    2: 20,
    3: 30,
  };
  const transactions = [
    buildTransaction(1, 2, 2000, INVALID, 100),
    buildTransaction(2, 1, 2000, INVALID, 200),
  ];

  const correctAccountsAfterTransactions = {
    1: 10,
    2: 20,
    3: 30,
  };

  const accountsAfterTransactions = await makeTransactions(
    accounts,
    transactions
  );
  return _.isEqual(correctAccountsAfterTransactions, accountsAfterTransactions);
};

const test3 = async () => {
  const accounts = {
    1: 100,
    2: -20,
    3: 150,
    4: 30,
  };
  const transactions = [
    buildTransaction(1, 2, 70, VALID, 10),
    buildTransaction(4, 3, 100, VALID, 30),
    buildTransaction(2, 4, 50, VALID, 15),
  ];

  const correctAccountsAfterTransactions = {
    1: 100 - 70,
    2: -20 + 70 - 50,
    3: 150 + 100,
    4: 30 - 100 + 50,
  };

  const accountsAfterTransactions = await makeTransactions(
    accounts,
    transactions
  );

  return _.isEqual(accountsAfterTransactions, correctAccountsAfterTransactions);
};
// const test4 = async () => {
//   const accounts = {
//     1: 40,
//     2: 300,
//     3: 0
//   };
//   const transactions = [
//     buildTransaction(3, 2, 20, VALID, 10),
//     buildTransaction(1, 3, 2000, INVALID, 10),
//     buildTransaction(1, 3, 10, VALID, 50),
//     buildTransaction(2, 1, 100, VALID, 200),
//     buildTransaction(2, 3, 100, INVALID, 200)
//   ];
//   const correctAccountsAfterTransactions = {
//     1: 40 - 10 + 100,
//     2: 300 + 20 - 100,
//     3: 0  - 20 + 10
//   };

//   const accountsAfterTransactions = await makeTransactions(accounts, transactions);

//   return _.isEqual(accountsAfterTransactions,correctAccountsAfterTransactions);
// }

const test = () => {
  Promise.all([test1(), test2(), test3()]).then((data) => {
    if (_.every([...data, true])) {
      console.log("all pass");
    } else {
      console.log("fail");
    }
  });
};
test();
