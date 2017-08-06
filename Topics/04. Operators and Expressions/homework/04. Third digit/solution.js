function solve(args) {
  let num = args[0].toString().split('').reverse()[2];
  if (num == 7) {
    console.log('true');
  } else if (num === undefined) {
    num = 0;
    console.log(`false ${num}`);
  } else {
    console.log(`false ${num}`);
  }
}
solve(['9703']);
