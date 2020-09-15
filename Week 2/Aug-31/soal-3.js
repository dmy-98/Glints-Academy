//Print Segitiga
const segitiga = (number) => {
    for (let i = 1; i <= number; i++) {
        let temp = "";
        for (let j = 1; j <= i; j++) {
            temp += "*";
        }
        console.log(temp);
    }
    console.log("")
}

//Input 3
//Output
// *
// **
// ***

segitiga(3);

// 5
//Output
//  *
//  **
//  ***
//  ****
//  *****

segitiga(5);