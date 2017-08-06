function binarySearch(args) {
  let numbers = args.map(Number),
    length = numbers.shift(),
    searchedNum = numbers.pop(),
    startIndex = 0,
    endIndex = length - 1,
    middleIndex;

  // just in case
  numbers.sort(function (a, b) {
    return a - b;
  });

  while (startIndex <= endIndex) {
    middleIndex = (startIndex + endIndex) / 2 | 0;

    if (numbers[middleIndex] === searchedNum) {

      for (let i = 0; i < middleIndex; i++) {
        if (numbers[i] === searchedNum) {
          return i;
        }
      }

      return middleIndex;
    }

    if (numbers[startIndex] > searchedNum || numbers[endIndex] < searchedNum) {
      return -1;
    }

    if (numbers[middleIndex] < searchedNum) {
      startIndex = middleIndex + 1;
    } else if (numbers[middleIndex] > searchedNum) {
      endIndex = middleIndex - 1;
    }
  }
}
