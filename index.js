const receivesAFunction = function (callback) {
    callback();
  };
  receivesAFunction();
  
  function returnsANamedFunction() {
    return function n01() {
     
    };
  }
  
  function returnsAnAnonymousFunction() {
    return function () {
   
    }
  }