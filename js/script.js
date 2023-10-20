
const rowElem = document.querySelector(".row");
console.log(rowElem);

// CONSTANTI PER IL CILCO FOR
let row = "";
let colNumber = "";
let colColor = "" ;
for (let i = 1; i <= 100; i++) {

    if(i % 3 === 0) {
        i = "Fizz";

    } else if (i % 5 === 0 ) {
       i = "Buzz";
    } else if (i % 5 === 0 ||  ) {
        i = "Buzz";
     }

    // console.log(i, result);
    gridString += `<div class="col ${fizz}">${i}</div>`
    console.log(`iterazione ${i}`, gridString);
}
