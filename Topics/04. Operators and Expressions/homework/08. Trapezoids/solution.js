function solve(args) {
  let a = +args[0],
      b = +args[1],
      h = +args[2],
      area = (h * (a + b) / 2).toFixed(7);
  console.log(area);
}
solve(['5', '7', '12']); //Output 72.0000000
