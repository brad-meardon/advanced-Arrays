// Advanced Arrays
const array = [1, 2, 10, 16];
const double = []
const newArray = array.forEach((num) => { // Loops through each number in the array and does this function
   double.push(num * 2); // Add doubled numbers to a new array
});

console.log('forEach ', double); // Returns 2, 4, 20, 32

// Map - Better to use this when looping through an array
const mapArray = array.map((num) => num * 2); // Expects a return and Returns the current number it's on + 2 and adds it to "mapArray"

console.log('map ', mapArray); // Returns 3, 4, 12, 18

// Filter 
const filterArray = array.filter((num) => num > 5); // Filters and returns numbers that meet the restriction

console.log('filter ', filterArray); // Returns 10, 16

// Reduce 
const reduceArray = array.reduce((acc, num) => {
   return acc + num; // Accumulator remembers the previous state and adds the next number
}, 0);

console.log('reduce ', reduceArray); // Returns 29 as 1+2+10+16 = 29