const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	let total = 0;
  array.forEach(function(number) {
    total += number;
  });
  return total;
};

const multiply = function(array) {
  let total = 1;
  array.forEach(function(number) {
    total *= number;
  });
  return total;
};

const power = function(num1, num2) {
	total = num1;
  for (i = 0; i < num2-1; i++) {
    total *= num1;
  }
  return total;
};

const factorial = function(num) {
	total = 1;
  if (num == 0) {
    return 1;
  } else {
    for (i = 1; i <= num; i++) {
      total *= i;
    }
    return total;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
