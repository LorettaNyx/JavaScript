function solve(args){
  const num = +args[0];
  result = num % 5 === 0 && num % 7 === 0 ? `true ${num}` : `false ${num}`;
  console.log(result)
}
