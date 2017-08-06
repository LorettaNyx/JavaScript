function solve(args) {
  const number = +args[0];
  let result = '';
  for (let i = 1; i <= number; i += 1) {
    result += ' ' + i;
  }
  console.log(result);
}

solve(['5']);
