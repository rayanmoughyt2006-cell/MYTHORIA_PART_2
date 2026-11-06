 import { fixeData } from "./cards.js"
 let test = await fixeData();
 let count = 0;
 const btnajoute = document.getElementById("btnajoute")
 const cartUser = document.getElementById("cartUser")
 const handcart = document.querySelectorAll(".handcart")
 const arena = document.querySelector("#arena")
 export let hand = [];


 export function ajoutelescart() {
     btnajoute.addEventListener("click", (e) => {
         if (count === 5) {
             alert("tu ne peux pas ajoute une autro carts !")
             return;
         }
         const img = document.createElement("img");
         img.src = test[count].image;
         console.log(img.src)
         img.className = "border-[1px] rounded-[5px] hover:scale-105 h-[100px] w-[70px] handcart"
         cartUser.appendChild(img)
         count++;
         hand.push(test[count].image)

     })
 }

 console.log(hand)
 export function ajoutecarta() {
     cartUser.addEventListener("click", (e) => {
         if (e.target.classList.contains("handcart")) {
             arena.appendChild(e.target);
             count--;
         }
     });
 }