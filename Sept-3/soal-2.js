// 2. Sort the letters
// Sort the letter from the word

function sortLetter(words) {
    words = words.split('');
    words = words.sort();
    return words.join('');
}

//Test Case
console.log(sortLetter("hello")); //ehllo