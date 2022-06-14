const { VALID, INVALID, buildTransaction } = require("./utils/transactions");
const _ = require("lodash");

async function makeTransactions(accounts, transactions) {
  // TODO: implement this function

  if (transactions.length === 0) {
    return accounts;
  }

  transactions.forEach((trans) => {
    try {
      accounts[trans.from] -= trans.amount;
      accounts[trans.to] += trans.amount;
    } catch (err) {
      console.log(err);
    }
  });
  return accounts;
}

const accounts = {
  1: 100,
  2: -20,
  3: 150,
  4: 30,
};
const transactions = [
  buildTransaction(1, 2, 70, VALID, 10),
  buildTransaction(4, 3, 100, VALID, 30),
  buildTransaction(2, 4, 50, INVALID, 15),
];

console.log(makeTransactions(accounts, transactions));
