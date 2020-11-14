const converter = (decimal) => {
    //code here -> NO RECURSIVE!!
    const romawi = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };
    let roman = '',
        i;
    for (i in romawi) {
        while (decimal >= romawi[i]) {
            roman += i;
            decimal -= romawi[i];
        }
    }
    console.log(roman);
}

//Test Case
converter(2019);
//Output : MMXIX
converter(1999);
//Output : MCMXCXIX
converter(1777);
//Output : MDCCLXXVII