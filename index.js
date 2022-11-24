const receivesAFunction = function (callback) {
    callback();
  };
  receivesAFunction();
  
  function returnsANamedFunction() {
    return function namedFn() {
      console.log("named function");
    };
  }
  
  function returnsAnAnonymousFunction() {
    return function () {
      console.log(" anonymous function");
    };
  }