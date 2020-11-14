const retjehan = [100000, 50000, 20000, 5000, 1000, 500, 100]

const exchange = (doit) => {
    //code here
    retjehan.forEach(el => {
        // console.log(doit)
        if ((doit / el) > 0) {
            console.log(`${el}: ${Math.floor(doit / el)}`);
        }
        doit %= el
    })
}

//Test Case
exchange(185500);
console.log("");
// Output
/*
    {
        100000 : 1,
        50000 : 1,
        20000 : 1,
        5000 : 3,
        500 : 1
    }
*/
exchange(377000);
// Output
/*
     {
         100000 : 3,
         50000 : 1,
         20000: 1,
         5000 : 1,
         1000 : 2
     }
*/