// Find the Mean of given Array

function mean(array) {
    //code here
    let temp = 0;
    for (let i of array) {
        temp += i;
    }
    return (temp / array.length).toFixed(2);
}

//Test 
console.log(mean([1, 2, 3, 4, 5])) //3
console.log(mean([3.7, 5.3, 7.0, 1.9, 3.1, 0.5, 1.5])) //3.28 -> 2 angka di blkg