 import { fixeData } from "./cards.js"
 let test = await fixeData();
 let count = 0;
 const btnajoute = document.getElementById("btnajoute")
 const cartUser = document.getElementById("cartUser")
 let hand = [];
 export function ajoutelescart() {
     //      test.forEach(carta => {
     //          btnajoute.addEventListener("click", (e) => {
     //              const img = document.createElement("img");
     //              img.src = carta.image;
     //              console.log(img.src)
     //              img.className = "border-[1px] rounded-[5px] hover:scale-105"
     //              cartUser.appendChild(img)
     //              hand.push(carta)
     //              console.log(hand);
     //          })
     //      });
     btnajoute.addEventListener("click", (e) => {
         if (count === 5) {
             alert("sir t7awa")
             return;
         }
         const img = document.createElement("img");
         img.src = test[count].image;
         console.log(img.src)
         img.className = "border-[1px] rounded-[5px] hover:scale-105 h-[100px] w-[70px] "
         cartUser.appendChild(img)
         count++;
         hand.push(test[count])
         console.log(hand);
     })
 }