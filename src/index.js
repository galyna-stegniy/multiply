module.exports = function multiply(first, second) {
  let firstArray = first.split('').reverse();
  let secondArray = second.split('').reverse();
  let stack = [];

  for (let i = 0; i < firstArray.length; i++) {
    for (let j = 0; j < secondArray.length; j++) {
      let product = firstArray[i] * secondArray[j];
      stack[i + j] = stack[i + j] ? stack[i + j] + product : product;
    }
  }

  for (let i = 0; i < stack.length; i++) {
    let num = stack[i] % 10;
    let move = Math.floor(stack[i] / 10);
    stack[i] = num;

    if (stack[i + 1]) {
      stack[i + 1] += move;
    } else if (move != 0) {
      stack[i + 1] = move;
    }
  }
  return stack.reverse().join('');
};
