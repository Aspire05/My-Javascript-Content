// Using void to create a self-executing function
void function () {
    console.log("This is a self-executing function.");
  }();
  
  // Using void to force a function to return undefined
  function exampleFunction() {
    // some code here
    return void 0; // equivalent to return undefined;
  }
  
  console.log(exampleFunction()); // Outputs: undefined
  