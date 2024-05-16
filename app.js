
// let para = document.getElementById("para");
// let para2 = document.getElementById("more");
// let para3 = document.getElementById("more2")
// let button = document.getElementById("btn");

// function readMore() {
//     if (para.textContent.length >= 200) {
//         let res = para.innerText + para2.innerText;
//         para.innerText = res; 
//         let res2 = res + para3
//         para.innerText = res2
//         button.style=display = "none"; 
//     }
// }

// button.addEventListener("click", readMore);

let para = document.getElementById("para");
let para2 = document.getElementById("more");
let para3 = document.getElementById("more2");
let button = document.getElementById("btn");

function readMore() {
    if (para.textContent.length >= 200) {
        let res = para.innerText + para2.innerText;
        para.innerText = res; 
        let res2 = res + para3.innerText; // Use para3.innerText or para3.textContent
        para.innerText = res2;
        button.style.display = "none"; // Correct the syntax
    }
}

button.addEventListener("click", readMore);
