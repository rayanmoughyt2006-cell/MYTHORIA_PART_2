const data = JSON.parse(localStorage.getItem("deck")) || [];
const dataCarts = json.parse(cards)
console.log(dataCarts)
const choisicart = document.getElementById("choisicart")
const startbutton = document.getElementById("start-btn")
const playerstart = document.getElementById("player-start");
const btnajoute = document.querySelectorAll(".btnajoute")
console.log(btnajoute)
let result ;

function start(){
    startbutton.addEventListener("click", () => {
        result = Math.floor(Math.random() * 2) + 1;
        if (result == 1) {
            playerstart.textContent = "user start first !"
        }
        else {
            playerstart.textContent = "ai start first !"
        }
        
    })
    console.log(result)
}

function ajoutelescart(){
    btnajoute.forEach((event) => {
        event.addEventListener("click", (e)=>{
            alert("hello");
        })   
    })  
}
ajoutelescart();
start();