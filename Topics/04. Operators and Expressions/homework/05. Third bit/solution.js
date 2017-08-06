function solve(args) {
  let num = args[0];
  let mask = 1 << 3;
  let result = num & mask;
  let bit = result >> 3;
  console.log(bit);
}
solve(['15'])
