// union type
function combine(input1: number | string, input2: number) {
  // Narrowing
  if (typeof input1 === 'number') {
    return console.log(input1 + input2);
  } else {
    return console.log(input1 + input2.toString());
  }
}

combine(3, 2); // 5

combine('3', 2); // 32
