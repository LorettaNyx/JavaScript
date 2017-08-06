function solve(args) {
  let number = args.shift(),
    arr = args.map(Number),
    count = 1,
    maxCount = 0,
    i;

  for (i = 0; i < number; i += 1) {
    if (+arr[i + 1] > +arr[i]) {
      count += 1;
      if (count > maxCount) {
        maxCount = count;
      }
    } else {
      count = 1;
    }
  }
  console.log(maxCount);
}
