// Find the Faktor Persekutuan terbesar
function fpb(number1, number2) {
    var temp = 0;
    let small = Math.min(number1, number2);
    // if (number1 > number2) { small = number2 }
    for (var i = 1; i < small; i++) {
        if (number1 % i === 0 && number2 % i === 0) {
            temp = i;
        }
    }
    return temp;
}

//Test
console.log(fpb(30, 50)) //10
console.log(fpb(12, 15)) //3
console.log(fpb(17, 35)) //1