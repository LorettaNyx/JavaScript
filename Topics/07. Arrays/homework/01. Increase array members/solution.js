function solve(args) {
    let number = +args[0];
    let array = [];

    for (let i = 0; i < number; i += 1) {
        array[i] = i * 5;
    }
    console.log(array.join('\n'));
}
