// Encrypt the string
// Rules : swap the letter, after the letter itself.
// Example : "wow" -> //xpx
// after letter w is x, after letter o is p, and so on.

function swap(string) {
    //code here
    let encrypt = "";
    for (let i = 0; i < string.length; i++) {
        let ascii = 0;
        ascii = string.charCodeAt(i);
        encrypt += String.fromCharCode(ascii + 1);
    }
    return encrypt;
}

//Test
console.log(swap("wow")); //xpx
console.log(swap("javascript")); //kbwbtdsjqu