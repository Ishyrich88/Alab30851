// Part 1
// take an array of number and return the sum 

function sumOfArray (numbers) {
    return numbers.reduce ((sum,number) => sum + number, 0);
}

const nums = [91,105,87,24,17,4,37];
console.log (sumOfArray(nums));

//Calculate the average of an Array 

function averageArray(numbers) {
    const sum = numbers.reduce((sum, number) => sum + number, 0);
    return sum / numbers.length;
}

console.log(averageArray(nums));

// longest string in array 

function longestString(strings) {
    return strings.reduce((longest, current) => {
        return current.length > longest.length ? current : longest;
    }, "");
}

const words = ['I will heal', 'Im positive', 'I wont give up', 'god is with me ', 'im strong'];
console.log(longestString(words));

// longest array in a given number

function stringsLongerThan(strings, length) {
    return strings.filter(string => string.length > length);
}

console.log(stringsLongerThan(words, 3));

// print numbers to 1 to n

function printNumbers(n, current = 1) {
    if (current > n) return;
    console.log(current);
    printNumbers(n, current + 1);
}

// Example usage:
printNumbers(5);