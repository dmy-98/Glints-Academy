// In order to help organizing the students score.
// Mr. James asks developers to make it
// Apps must contain these :
// - Sort the students score from the highest
// - Group from the major
// - Calculate the average score

let data = require('./data.json');

const sortScore = () => {
    data.sort((a, b) => (a.score < b.score) ? 1 : -1);
    return data;
}

const groupMajor = () => {
    major = [];
    temp = {}
    for (let i of data) {
        if (!major.includes(i.major)) { //includes : search a value in an array return true or false
            major.push(i.major);
            temp[i.major] = [];
        }
        for (let j of major) {
            if (i.major == j) {
                temp[j].push(i);
            }
        }
    }
    return temp;
}

const averageScore = () => {
    let sum = 0;
    for (let i of data) {
        sum += i.score;
    }
    return sum / data.length;
}

data = sortScore();
console.log(data);
data = groupMajor();
console.log(data);
console.log(averageScore());