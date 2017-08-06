function solve(args) {
  let hex = args[0];
  let result = 0, digitValue;
  for (let i = 0; i < hex.length; i++) {
    digitValue = '0123456789abcdefgh'.indexOf(hex[i].toLowerCase());
    result = result * 16 + digitValue;
  }
  return result;
}
