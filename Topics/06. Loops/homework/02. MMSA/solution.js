function solve(args) {
  let avg,
      sum = 0,
      min = +args[0],
      max = +args[0],
      i,
      number = args.map(Number),
      len = args.length;

  for (i = 0; i < len; i += 1) {
    if (number[i] < min) {
      min = number[i];
    } else if (number[i] > max) {
      max = number[i];
    }
    sum += number[i];
  }
  avg = sum / len;
  console.log('min=' + min.toFixed(2) + '\nmax=' + max.toFixed(2) + '\nsum=' + sum.toFixed(2) + '\navg=' + avg.toFixed(2));
}
