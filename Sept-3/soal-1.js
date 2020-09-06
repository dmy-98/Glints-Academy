// 1. Convert Minute to time

function convertMinute(minute) {
    let hour = parseInt(minute / 60);
    let remainMinute = minute % 60;
    if (remainMinute < 10) {
        remainMinute = `0${remainMinute}`;
    }
    return `${parseInt(hour)}:${remainMinute}`;
}

//Test Case
console.log(convertMinute(100)) //1:40
console.log(convertMinute(185)) //3:05