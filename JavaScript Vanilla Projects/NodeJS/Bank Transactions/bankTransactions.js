const { VALID, INVALID, buildTransaction } = require("./utils/transactions");
async function makeTransactions(accounts, transactions) {
  if (transactions.length === 0) {
    return accounts;
  }
  transactions.forEach((trans) => {
    try {
      trans.validate();
      accounts[trans.from] -= trans.amount;
      accounts[trans.to] += trans.amount;
    } catch (err) {
      console.log(err);
    }
  });
  return accounts;
}
module.exports = { makeTransactions };
