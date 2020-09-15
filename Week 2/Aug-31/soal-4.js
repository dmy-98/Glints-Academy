// Split words without function .split(" ")
var string = "Lorem ipsum is dummy text";

// Using For

const forSplitWords = (array) => {
    let word = "";
    let tempArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] == " ") {
            tempArray.push(word);
            word = "";
        }
        word += array[i];
    }
    return tempArray;
};


// Using While

const whileSplitWords = (array) => {
    let i = 0;
    let word = "";
    let tempArray = [];
    while (i < array.length) {
        if (array[i] == " ") {
            tempArray.push(word);
            word = "";
        }
        word += array[i];
        i++;
    }
    return tempArray;
};

// Output
// ["Lorem", "ipsum", "is", "dummy", "text"]

// console.log(forSplitWords(string));
console.log(whileSplitWords(string));