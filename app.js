


let para = document.getElementById("para");
let para2 = document.getElementById("more");
let button = document.getElementById("btn");

function readMore() {
    if (button.textContent == "Read More") {
        let res = para.innerText + para2.innerText;
        para.innerText = res; 
        button.innerText = "Read Less";
    } else {
        let result = para.innerText.slice(0, 200);
        para.innerText = result;
        button.innerText = "Read More";
    }
}

button.addEventListener("click", readMore);

        // function readMore() {
        //     if (para.textContent.length >= 200) {
        //         let res = para.innerText + para2.innerText;
        //         para.innerText = res; 
        //         if (para.textContent.length >= 400) {
        //             // button
        //         let res2 = res.innerText + para3.innerText
        //         res.innerText = res2
        //         }
               
        //     }
        // }
        
        // button.addEventListener("click", readMore);