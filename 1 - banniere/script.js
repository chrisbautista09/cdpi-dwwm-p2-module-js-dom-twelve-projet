/*
Nouvelles compétences:
- querySelector // Selectionne le premier element seulement mieux que getElementsBy
- HTMLElement.style 
*/

// 1. Je recupere le bouton "Accepter les cookies"

let btncookies_elem = document.querySelector(".btn.btn-accept");

// 2. Je recupere la banniere de cookies

const cookies_elem = document.querySelector(".cookies");

// 3. J'ecoute l'evenement "click" sur le bouton "Accepter les cookies"


cookies_elem.addEventListener("click",() => {
      cookies_elem .classList.add("hidden"); 
    });

