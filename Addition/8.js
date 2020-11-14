let seats = [
    ['X', ' ', ' '],
    [' ', ' ', 'X'],
    [' ', 'x', ' ']
]

const showSeats = () => {
    //code here
    let show = "";
    seats.forEach(seat => {
        show += '[';
        seat.forEach((line, i) => {
            show += `${line}`;
            if (i != seat.len) { show += ',' };
        })

        show += ']\n';
    });
    console.log(show);
};

const book = (seat) => {
    //code here
    // let number = Number(seat[1] - 1);
    // switch (seat[0]) {
    //     case 'A':
    //         if (seats[0, number] == 'X') {
    //             console.log(`${seat} has already been booked!`)
    //         } else {
    //             seats[0, number] = 'X';
    //         }
    //         break;
    //     case 'B':
    //         if (seats[1, number] == 'X') {
    //             console.log(`${seat} has already been booked!`)
    //         } else {
    //             seats[0, number] = 'X';
    //         }
    //         break
    //     case 'C':
    //         if (seats[2, number] == 'X') {
    //             console.log(`${seat} has already been booked!`)
    //         } else {
    //             seats[0, number] = 'X';
    //         }
    //         break;
    // }
}

//Test case
book('A3');
//Output : Thanks! Book A3
book('C2');
//Output : C2 has already been booked!
showSeats();
//Output :
/*
[
    ['X','','X'],
    ['','','X'],
    ['','x','']
]
*/