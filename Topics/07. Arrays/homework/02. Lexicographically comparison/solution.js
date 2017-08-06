function solve(args) {
  let lex = args.map(String);
  let firstWord = lex[0].trim();
  let secondWord = lex[1].trim();

  if (firstWord > secondWord) {
    console.log('>');
  } else if (firstWord < secondWord) {
    console.log('<');
  } else {
    console.log('=');
  }
}
