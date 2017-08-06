function solve(args) {
  let ones = [' Zero', ' One', ' Two', ' Three', ' Four', ' Five', ' Six', ' Seven', ' Eight', ' Nine', ' Ten', ' Eleven', ' Twelve', ' Thirteen', ' Fourteen', ' Fifteen', ' Sixteen', ' Seventeen', ' Eighteen', ' Nineteen'],
    tens = ['', '', ' Twenty', ' Thirty', ' Forty', ' Fifty', ' Sixty', ' Seventy', ' Eighty', ' Ninety'],
    result = '';

  for (let i = 0; i < args.length; i += 1) {
    if (+args < 20) {
      result = ones[+args].trim();
    } else if (+args % 10 === 0 && +args > 19 && +args < 100) {
      result = tens[+args / 10].trim();
    } else if (+args % 10 !== 0 && +args > 19 && +args < 100) {
      result = tens[Math.floor(args / 10)].trim() + ones[+args % 10].toLowerCase();
    } else if ((args % 100) === 0 && args > 99 && args < 1000) {
      result = ones[args / 100] + ' hundred';
    } else if ((args % 100) !== 0 && args > 99 && args < 1000 && +args % 10 !== 0) {
      result = ones[Math.floor(args / 100)] + ' hundred and';
      if (args % 100 < 20) {
        result += ones[Math.floor(args % 100)].toLowerCase();
      } else {
        result += tens[Math.floor(args / 10) % 10].toLowerCase() +
          ones[Math.floor((args % 100) % 10)].toLowerCase();
      }
    } else if (+args % 10 === 0 && +args > 100 && +args < 1000) {
      result = ones[Math.floor(args / 100)] + ' hundred and' + tens[Math.floor(args / 10) % 10].toLowerCase();
    }
  }
  console.log(result);
}

solve(['10']);        
