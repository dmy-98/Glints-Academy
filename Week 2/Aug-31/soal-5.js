// Find the faktorial
const factorial = (number) => {
    let total = 1;
    let str = `${number}! = `;
    for (let i = number; i > 0; i--) {
        str += i;
        if (i != 1) {
            str += ".";
        }
        total *= i;
    }
    return `${str} = ${total}`;
};

//Faktorial 
// 3! = 3.2.1 = 6
console.log(factorial(3));

//Input 5
//Output
// 5.4.3.2.1 = 120
console.log(factorial(5));