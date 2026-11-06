import { ajoutelescart } from "./ui.js"
import { fixeData } from "./cards.js"
import { ajoutecarta } from "./ui.js"
let test = await fixeData();
const choisicart = document.getElementById("choisicart")
const startbutton = document.getElementById("start-btn")
const playerstart = document.getElementById("player-start");
let result;

function start() {
    startbutton.addEventListener("click", () => {
        result = Math.floor(Math.random() * 2) + 1;
        if (result == 1) {
            playerstart.textContent = "user start first !"
        } else {
            playerstart.textContent = "ai start first !"
        }

    })
}
ajoutelescart();
ajoutecarta();
start();