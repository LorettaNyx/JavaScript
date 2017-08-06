function solve(args) {
  let num = args[0];
  if (num < 2 || num > 100) {
    return false;
  } else if (num === 2) {
    return true;
  } else {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
}

console.log(solve(['127']));
