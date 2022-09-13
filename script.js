let alpha = document.querySelector(".alpha")
let input = document.querySelector("#input")
let button = document.querySelector("#button")
let row = 29
let col = 40
let total = 1160
let start = 19
button.onclick = function() {
    for (i = 1; i < 1161; i++) {
        let div = document.createElement("span")
        div.textContent = "*"
        alpha.appendChild(div)
        div.id = i

        if (parseInt(div.id) % 40 == 0) {

            alpha.appendChild(document.createElement("br"))
        }


        if (input.value === "a") {

            for (let l = 19; l < 19 * (col - 1); l = l - 1 + col) {
                if (parseInt(div.id) === l) {
                    div.style.color = 'blue'
                    div.style.opacity = 1

                }
            }
            for (let l2 = 20; l2 < 20 * (col - 1); l2 = l2 - 1 + col) {
                if (parseInt(div.id) === l2) {
                    div.style.color = 'blue'
                    div.style.opacity = 1
                }
            }
            for (let r = 22; r < 19 * (col + 1); r = r + 1 + col) {
                if (parseInt(div.id) === r) {
                    div.style.color = 'blue'
                    div.style.opacity = 1
                }
            }
            for (let r2 = 21; r2 < 19 * (col + 1); r2 = r2 + 1 + col) {
                if (parseInt(div.id) === r2) {
                    div.style.color = 'blue'
                    div.style.opacity = 1
                }
            }
            for (let m = col * 9 + 1; m < col * 10 + 1; m++) {
                if (parseInt(div.id) === m) {
                    div.style.color = 'red'
                    div.style.opacity = 1
                }
            }
            for (let m2 = col * 10 + 1; m2 < col * 11 + 1; m2++) {
                if (parseInt(div.id) === m2) {
                    div.style.color = 'red'
                    div.style.opacity = 1
                }
            }

        } else if (input.value === "b") {
            for (let br = 15; br < 18 * 40; br = br + 40) {
                if (parseInt(div.id) === br) {
                    div.style.color = "blue"
                    div.style.opacity = "1"
                }
            }
            for (let b2 = 15 + 1; b2 < 18 * 40; b2 = b2 + 40) {
                if (parseInt(div.id) === b2) {
                    div.style.color = "blue"
                    div.style.opacity = "1"
                }
            }
            for (let br2 = 15 + 1; br2 < 9 + 17; br2 = br2 + 1) {
                if (parseInt(div.id) === br2) {
                    div.style.color = "blue"
                    div.style.opacity = "1"
                }
            }
            for (let b2 = 9 + 17; b2 < 18 * 40; b2 = b2 + 40) {
                if (parseInt(div.id) === b2) {
                    div.style.color = "blue"
                    div.style.opacity = "1"
                }
            }
            for (let b2 = 10 + 17; b2 < 18 * 40; b2 = b2 + 40) {
                if (parseInt(div.id) === b2) {
                    div.style.color = "blue"
                    div.style.opacity = "1"
                }
            }
            for (let br2 = (16) + 40; br2 < 9 + 17 + 40; br2 = br2 + 1) {
                if (parseInt(div.id) === br2) {
                    div.style.color = "blue"
                    div.style.opacity = "1"
                }
            }
            for (let br2 = (16) + 40 * (9); br2 < 9 + 17 + 40 * 9; br2 = br2 + 1) {
                if (parseInt(div.id) === br2) {
                    div.style.color = "blue"
                    div.style.opacity = "1"
                }
            }
            for (let br2 = (16) + 40 * (10); br2 < 9 + 17 + 40 * 10; br2 = br2 + 1) {
                if (parseInt(div.id) === br2) {
                    div.style.color = "blue"
                    div.style.opacity = "1"
                }
            }
            for (let br2 = (15) + 40 * (18); br2 < 11 + 17 + 40 * 18; br2 = br2 + 1) {
                if (parseInt(div.id) === br2) {
                    div.style.color = "blue"
                    div.style.opacity = "1"
                }
            }
            for (let br2 = (15) + 40 * (19); br2 < 11 + 17 + 40 * 19; br2 = br2 + 1) {
                if (parseInt(div.id) === br2) {
                    div.style.color = "blue"
                    div.style.opacity = "1"
                }
            }

        }
    }
    input.value = ""
        // button.className = z
        // if (parseInt(button.className) > 0) {
        //     window.location.href = "http://127.0.0.1:5500/index.html"

    // }
    // z++



}