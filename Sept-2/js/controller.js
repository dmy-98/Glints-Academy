function largestNumber(array) {
    var largest = array[0];
    // code below this line
    for (let i of array) {
        if (i > largest) {
            largest = i;
        }
    }
    // code above this line
    return Number(largest)
}


largestNumber([1, 2, 3, 4, 5]) // should return 5

console.log(largestNumber([1, 2, 3, 'hp', '5'])) // should return 5