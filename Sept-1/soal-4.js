function checkXO(string) {
    //code here
    let x = 0;
    let o = 0;
    for (let i of string) {
        if (i == "x") {
            x++;
        } else {
            o++;
        }
    }
    if (x == o) {
        return 1;
    } else {
        return -1;
    }
}

//Test
console.log(checkXO('xxxxxooooo')) //1
console.log(checkXO('xxxooooo')) //-1