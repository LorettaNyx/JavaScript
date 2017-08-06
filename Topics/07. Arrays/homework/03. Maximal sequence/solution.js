function solve(args) {
  let numbers = args.map(Number);
  let N = +numbers.shift();
  let currentLength = 1;
  let maxSeqLength = 0;

  for (i = 0; i < N; i += 1) {
    if (+numbers[i] === +numbers[i + 1]) {
      currentLength += 1;
    } else {
      if (currentLength > maxSeqLength) {
        maxSeqLength = currentLength;
      }
      currentLength = 1;
    }
  }
  console.log(maxSeqLength);

}
