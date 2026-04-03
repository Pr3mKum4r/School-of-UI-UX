console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");

/*
TODO:
1. Write expected output:
   -
   -
   -
   -

2. Which runs first: Promise or setTimeout? WHY?

3. Explain in terms of:
   - Call Stack
   - Microtask Queue
   - Callback Queue
*/