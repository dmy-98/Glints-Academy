// 5. Count the vowel
// Count the vowels and tunr into object

function vowelsObject(apaja) {
    let object = {
        a: 0,
        i: 0,
        u: 0,
        e: 0,
        o: 0
    };

    for (let letter of apaja) {
        switch (letter) {
            case 'a':
                object.a++;
                break;
            case 'i':
                object.i++;
                break;
            case 'u':
                object.u++;
                break;
            case 'e':
                object.e++;
                break;
            case 'o':
                object.o++;
                break;
            default:
                break;
        }
    }
    return object;
}

// function countVoewl(apaja) {

// }

//Test Case
console.log(vowelsObject("rum raisin chocolate ice cream"));
/*
    {
        a : 3,
        i : 3,
        u : 1,
        e : 3,
        o : 2
    }
*/