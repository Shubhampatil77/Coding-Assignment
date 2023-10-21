function sortDescending(arr) {
    return arr.sort((a, b) => b - a);
}

const inputArray = [5, 1, 9, 3, 7];
const sortedArray = sortDescending(inputArray);
console.log(sortedArray);
