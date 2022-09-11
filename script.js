let alpha = document.querySelector(".alpha")
let input = document.querySelector("#input")
let row = 29
let col = 40
let total = 1160
let start = 5
input.value = "a"
for (i = 1; i < 1161; i++) {
    const div = document.createElement("span")
    div.textContent = "*"
    alpha.appendChild(div)
    div.id = i
    if (parseInt(div.id) % 40 == 0) {

        alpha.appendChild(document.createElement("br"))
    }
    if (input.value === "a") {
        a.function()
    }
}
let a = {
    function: function() {
        for (l = start; l < 10 + start; l++) {
            if (parseInt(div.id) === l) {
                div.style.color = "blue"
                div.style.opacity = '1'
            }

        }
    }
}