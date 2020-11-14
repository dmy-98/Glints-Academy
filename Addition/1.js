const multidimensional = [
    [
        [15, 7, 8],
        [1, 5]
    ],
    [
        [23, 17, 21, 50, 12],
        [7, 8, 1],
        [100]
    ],
    [
        [105]
    ]
]

const deepSum = (multidimensional) => {
    //code here
    let sum = 0;
    multidimensional.forEach(el => {
        if (typeof el === 'object') {
            sum += deepSum(el)
        } else {
            sum += el
        }
    });
    return sum;
}

//Test Case
console.log(deepSum(multidimensional));

// Output : 380