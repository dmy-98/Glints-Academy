// Find the faktorial
const factorial = (number) => {
    let total = 1;
    for (let i = number; i > 0; i--) {
        total *= i;
    }
    return total;
};

//Faktorial 
// 3! = 3.2.1 = 6
console.log(factorial(3));

//Input 5
//Output
// 5.4.3.2.1 = 120
console.log(factorial(5));