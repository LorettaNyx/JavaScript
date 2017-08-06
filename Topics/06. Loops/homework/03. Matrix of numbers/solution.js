function printMatrix(args) {
    let i,
        j,
        iterator,
        size = +args[0],
        result = '';

    for (i = 0; i < size; i += 1) {
        iterator = i;
        for (j = 0; j < size; j += 1) {
            result += iterator + 1 + ' ';
            iterator += 1;
        }
        result += '\n';
    }
    return result.trim();
}
