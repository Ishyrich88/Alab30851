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

//part 2

const data = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }
  ];
  
  // Sort the array by age
  const sortedByAge = data.sort((a, b) => parseInt(a.age) - parseInt(b.age));
  console.log("Sorted by age:", sortedByAge);
  
  // Filter the array to remove entries with an age greater than 50
  const filteredByAge = data.filter(person => parseInt(person.age) <= 50);
  console.log("Filtered by age:", filteredByAge);
  
  // Map the array to change the “occupation” key to “job” and increment every age by 1
  const updatedData = data.map(person => ({
    id: person.id,
    name: person.name,
    job: person.occupation,
    age: (parseInt(person.age) + 1).toString()
  }));
  console.log("Updated data:", updatedData);
  
  // calculate the sum of the ages
  const totalAge = data.reduce((accumulator, person) => accumulator + parseInt(person.age), 0);
  console.log("Total age:", totalAge);
  
  // Calculate the average age 
  const averageAge = totalAge / data.length;
  console.log("Average age:", averageAge);