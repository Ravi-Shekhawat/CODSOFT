

let buttons = document.querySelectorAll(".btn");
let input = document.getElementById('inpVal');

let string = "";
let btn = Array.from(buttons)
btn.forEach(button => {

    button.addEventListener("click", (e) => {

        if (e.target.innerHTML == "=") {
            string = eval(string);
            input.value = string;
        }
        else if (e.target.innerHTML == "AC") {
            string = "";
            input.value = string;
        }
        else if (e.target.innerHTML == "DE") {
            string = input.value.toString().slice(0, -1);
            input.value = string;
        }
        else {
            string += e.target.innerHTML;
            input.value = string;
        }

    })
})