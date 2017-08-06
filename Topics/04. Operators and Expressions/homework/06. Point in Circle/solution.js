function solve(args) {
  let x = args[0], y = args[1];
  const radius = 2;
  const result = x * x - y * y;
  const difference = Math.sqrt(x * x + y * y);
  if (x * x + y * y <= radius * radius) {
    console.log(`yes ${difference.toFixed(2)}`);
  } else {
    console.log(`no ${difference.toFixed(2)}`);
  }
}
solve(['-2', '0']);
