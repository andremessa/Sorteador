const drawBtn = document.querySelector(".draw-button")
const drawnNumber = document.querySelector(".drawn-number")

drawBtn.addEventListener("click", generateNumber)


function generateNumber() {

    const min = Math.ceil(document.querySelector(".value-min").value)
    const max = Math.floor(document.querySelector(".value-max").value)

    if (min >= max) {
        alert("O valor mínimo não pode ser MAIOR que o valor máximo")
    } else {
        const result = Math.floor(Math.random() * (max - min + 1)) + min;

        drawnNumber.style.visibility = "visible"
        drawnNumber.innerHTML = result
    }

}

