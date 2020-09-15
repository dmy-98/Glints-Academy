// Check odd or even number
const checkNumber = (number) => {
    let check;
    number % 2 === 0 ?
        check = "Even" : check = "Odd";
    return `${number} = ${check}`;
}

//Test Case
//Input 5 -> Output Odd
//Input 10 -> Output Even
console.log(checkNumber(5));
console.log(checkNumber(10));