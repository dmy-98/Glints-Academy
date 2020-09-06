// 3. A random color
// Output a random color from a given color  

//Global
var colors = ['red', 'green', 'blue']

function randomColor() {
    let random = colors[Math.floor(Math.random() * colors.length)];
    // Math floor return largest integer less than or equal of given number(pembulatan)
    // Math random return number value from 0 to less than 1
    return `Color : ${random}`;
}

//Test Case
console.log(randomColor()); //Output -> Color : red