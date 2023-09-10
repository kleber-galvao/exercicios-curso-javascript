function fizzBuzz(num) {
    const div3 = num % 3;
    const div5 = num % 5;
    if (isNaN(num)) {
        return num;
    } else if (div3 !== 0 && div5 !== 0) {
        return num;
    } else if (div3 === 0 && div5 === 0) {
        return 'FizzBuzz';
    } else if (div3 === 0) {
        return 'Fizz';
    } else if (div5 === 0) {
        return 'Buzz';
    }
}

let i = 0;
while (i < 100) {
    console.log(i, fizzBuzz(i));
    i++;
}
