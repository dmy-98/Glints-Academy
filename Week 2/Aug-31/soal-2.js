// Print the n first numbers
const checkKelipatan = (number) => {
    for (let i = 1; i <= number; i++) {
        if (i % 15 === 0) {
            console.log(`${i} kelipatan 3 dan 5`);
        } else if (i % 3 === 0) {
            console.log(`${i} kelipatan 3`);
        } else if (i % 5 === 0) {
            console.log(`${i} kelipatan 5`)
        } else {
            console.log(`${i}`);
        }
    }
}

//Test Case
checkKelipatan(15);
//Input 15
/*Output
1
2
3 kelipatan 3
4
5 kelipatan 5
6 kelipatan 3
7
8
9 kelipatan 3
10 kelipatan 5
    .
    .
    .
15 kelipatan 3 dan 5 */