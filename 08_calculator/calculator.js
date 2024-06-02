const add = function(...args) {
  if (args.length > 1) {
    return [...args].reduce((total, currentItem) => {
      return total + currentItem;
    }, 0); 
  }
  return checkInput(args);
};

const subtract = function(...args) {
	if (args.length > 1) {
    return [...args].reduce((total, currentItem) => {
      return total - currentItem;
    });
  }
};

const sum = function(args) {
  if (args.length > 1) {
    return [...args].reduce((total, currentItem) => {
      return total + currentItem;
    }, 0); 
  }
  return checkInput(args);
};

const multiply = function(args) {
  if ([...args].length > 1) {
    return [...args].reduce((total, currentItem) => {
      return total * currentItem;
    }, 1); 
  }
  return checkInput(args);
};

const power = function(...args) {
	if ([...args].length > 1) {
    return [...args].reduce((total, currentItem) => {
      return total ** currentItem;
    }); 
  }
  return checkInput(args);
};

const factorial = function(args) {
  if (args === 0) {
    return 1;
  }
	if (args) {
    if (args === 1) {
      return 1;
    } else {
      return args * factorial(args - 1);
    }
    }; 
  return checkInput(args);
};

function checkInput(args) {
  if (!args) {
    return 0;
  }
  if (!Array.isArray(args) && args.length === 1) {
    return args;
  }
  if (Array.isArray(args)) {
    if (!args.length) {
      return 0;
    }
    if (args.length === 1) {
      return args[0];
    }
  }
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
