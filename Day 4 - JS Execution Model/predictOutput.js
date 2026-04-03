function first() {
    console.log("First start");
    second();
    console.log("First end");
  }
  
  function second() {
    console.log("Second");
  }
  
  first();
  
  /*
  TODO:
  1. Write the output order here:
     -
     -
     -
  
  2. Explain WHY this order happens (call stack concept)
  */