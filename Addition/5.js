const fibonacci = (n) => {
    //code here
    let fib = [0, 1];

    for (let i = 2; i <= n; i++) {
        fib.push(fib[i - 2] + fib[i - 1]);
    }
    let total = fib.reduce((a, b) => { return a + b }, 0)
    fib.shift()
    console.log(`Fibbonaci = ${fib}\nTotal = ${total}\nAverage = ${total/n} 
    `);
}

//Test Case
fibonacci(5);
//Output :
/*
    Fibonacci = 1 1 2 3 5
    Total = 12
    Average = 2.4
*/
fibonacci(10);
//Output :
/*
    Fibonacci = 1 1 2 3 5 8 13 21 34 55
    Total = 143
    Averag = 14.3
*/

//OUTPUT MUST BE THE SAME!!