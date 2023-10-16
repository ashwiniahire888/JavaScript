// Sample array of numbers
const numbers = [5, 1, 9, 3, 7];

// Sorting the array in descending order
numbers.sort(function(a, b) {
    return b - a;
});

document.write(numbers); // Output: [9, 7, 5, 3, 1]
