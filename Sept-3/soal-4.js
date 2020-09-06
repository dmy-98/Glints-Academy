// 4. Split words without function .split(" ") and find the max

var string = "Lorem ipsum is dummy text";

// Using For
function forMaxWordLength() {
    let maxWord = "",
        nextWord = "";
    string += " "; // to count the last word

    for (let i = 0; i < string.length; i++) {
        if (string[i] === " ") {
            if (nextWord.length > maxWord.length) {
                maxWord = nextWord;
            }
            i++;
            nextWord = "";
        }
        nextWord += string[i];
    }
    return maxWord;
}


// Using While
function whileMaxWordLength() {
    let maxWord = "",
        nextWord = "",
        i = 0;
    string += " "; // to count the last word 

    while (i < string.length) {
        if (string[i] === " ") {
            if (nextWord.length > maxWord.length) {
                maxWord = nextWord;
            }
            i++;
            nextWord = "";
        }
        nextWord += string[i];
        i++;
    }
    return maxWord;
}

// Test Case
console.log(whileMaxWordLength(string)); //Lorem
console.log(forMaxWordLength(string)); //Lorem