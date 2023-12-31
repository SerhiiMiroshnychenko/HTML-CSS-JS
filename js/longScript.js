// Long script begins

// String to two

const myString = 'Hello Javascript';

function strEven(str) {
    const l = str.length;
    let even = '';
    for(i=0; i<l; i++) {
        if (i%2===0){
            even = even + str[i];
        };
    };
    return even;
}

function strOdd(str) {
    const l = str.length;
    let odd = '';
    for(i=0; i<l; i++) {
        if (i%2!==0){
            odd = odd + str[i];
        };
    };
    return odd;
}

const evenStr = strEven(myString);
console.log(evenStr);

const oddStr = strOdd(myString);
console.log(oddStr);





