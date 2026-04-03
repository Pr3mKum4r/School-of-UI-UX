function createCounter() {
    let count = 0;
  
    return function () {
      // TODO: increment and return count
    };
  }
  
  const counter1 = createCounter();
  
  console.log(counter1()); // ?
  console.log(counter1()); // ?
  
  /*
  TODO:
  1. Complete the function
  2. Explain why count is remembered (closure)
  */