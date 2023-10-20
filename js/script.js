
const rowElem = document.querySelector(".row");
console.log(rowElem);

// CONSTANTI PER IL CILCO FOR
let rowString = "";
let colNumber = "";
let colColor = "";
for (let i = 1; i <= 100; i++) {

    if (i % 5 === 0 && i % 3 === 0) {

        colNumber = "FizzBuzz";
        colColor = "fizzbuzz";

    } else if (i % 5 === 0) {

        colNumber = "Buzz";
        colColor = "buzz";

    } else if (i % 3 === 0) {

        colNumber = "Fizz";
        colColor = "fizz";

    } else {

        colNumber = i;
        colColor = "number";
    }

    console.log(colNumber, colColor);
    rowString += `<div class="cell fw-bold d-flex flex-center ${colColor}">${colNumber}</div>`

}

rowElem.innerHTML = rowString;
