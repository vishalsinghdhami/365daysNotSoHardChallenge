// Closures are functions inside function and it makes a normal function stateful. Below is a simple,
// closure code.
/*Closures have two big advantages: -
• It helps to create self-contained modules, if we have self-contained modules then their state 
is also self-contained which leads to less global variables and thus better code.
• It helps to implement encapsulation and abstraction.
*/
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
