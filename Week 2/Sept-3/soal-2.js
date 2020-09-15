// 2. Sort the letters
// Sort the letter from the word

const sortLetter = (words) => {
    words = words.split(''); //string to array
    words = words.sort(); // array sorting
    return words.join(''); // array to string
}

//Test Case
console.log(sortLetter("hello")); //ehllo