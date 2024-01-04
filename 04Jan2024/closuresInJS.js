// Closures are functions inside function and it makes a normal function stateful. Below is a simple
// closure code.

function ClosureFunction() {
  var x;
  function Increment() {
    x++;
  }
  function GetXValue() {
    return x;
  }
  function Init() {
    x = 0;
  }
  Init();
  return {
    Increment,
    GetXValue,
  };
}
let ref = ClosureFunction()
ref.Increment();
console.log(ref.GetXValue());
