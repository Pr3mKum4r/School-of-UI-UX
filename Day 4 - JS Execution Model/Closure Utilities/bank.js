function createBankAccount(initialBalance) {
    let balance = initialBalance;
  
    return {
      deposit(amount) {
        // TODO
      },
      withdraw(amount) {
        // TODO
      },
      getBalance() {
        return balance;
      }
    };
  }
  
  const account = createBankAccount(100);
  
  /*
  TODO:
  1. Implement deposit & withdraw
  2. Ensure balance is NOT directly accessible
  3. Explain how closure provides data privacy
  */