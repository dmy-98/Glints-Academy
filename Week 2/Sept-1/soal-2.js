// Print the n first Prime numbers

function checkPrime(number) {
    //code here
    if (number === 1) {
        return false;
    } else if (number === 2) {
        return true;
    } else {
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                return false;
            }
        }
        return true;
    }
}

function print(n) {
    //code here
    let i = 1;
    let j = 1;
    let array = "";
    if (n < 1) {
        return "1";
    }
    while (i <= n) {
        if (checkPrime(j)) {
            i++;
            array += `${j} `;
        }
        j++;
    }
    return array;
}

//Test Case
console.log(print(3)); //2 3 5
console.log(print(5)); //2 3 5 7 11 
console.log(print(0)); //1