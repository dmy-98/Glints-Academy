const codes = ["alpha", "bravo", "charlie", "delta", "echo", "foxtrot", "golf", "hotel", "india", "juliet", "kilo", "lima", "mike", "nano", "oscar", "papa", "quebec", "romeo", "sierra", "tango", "uniform", "victor", "whiskey", "xray", "yankee", "zulu "] //Lanjutkan sendiri

const solvedWord = (sentence) => {
    //code here
    let words = sentence.split(" ");
    let output = "";
    words.forEach(word => {
        codes.forEach(code => {
            if (word == code) {
                output += word[0].toUpperCase()
            }
        })
    })
    if (!output) {
        console.log(`Code can't be solved`);
    } else {
        console.log(output);
    }
}

//Test Case
solvedWord("alpha nano juliet india nano golf");
//Output : ANJING (upper case)
solvedWord("bacot bet dah");
//Output : Code can't be solved