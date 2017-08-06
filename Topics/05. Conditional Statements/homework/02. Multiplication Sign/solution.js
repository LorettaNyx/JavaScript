function solve(args) {
  let a = args[0],
      b = args[1],
      c = args[2]
  if (a * b * c < 0) {
    console.log('-');
  } else if (a * b * c === 0) {
    console.log('0');
  } else {
    console.log('+');
  }
}
solve(['5', '2', '2']); // + 
