const real = [3, 7, 1, 1, 5, 2, 1, 8, 9, 10, 9];
const composites = [8, 8, 14, 18, 28, 36, 28, 15, 8, 28];

const modus = (numbers) => {
    let temp = {},
        i;
    numbers.forEach((el) => {
        if (!temp[el]) {
            temp[el] = 0;
        }
        for (i in temp) {
            if (i == el) {
                temp[i]++;
            }
        }
    });

    let max = 0,
        index;

    for (i in temp) {
        if (temp[i] > max) {
            max = temp[i];
            index = i;
        };
    }
    console.log(index);
}

//Test Case
modus(real);
//Output : 1
modus(composites);
//Output : 8