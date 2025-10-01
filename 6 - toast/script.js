/**
 * document.createElement()
 * element.classList.add()
 * element.innerHTML
 * elemParent.appendChild(elemEnfant)
 * element.remove()
 * setTimeout()
 */

// 1. Je recupere le bouton
const btn = document.querySelector("button");
// 2. Je recupere le conteneur de toasts
const ctnToasts = document.querySelector(".container-toasts");

// création des  balises 
const toast = document.createElement("div"); 
const toastp = document.createElement("p");

// Personnalisation de la balise
toast.classList.add("toast");
toast.classList.add("text_content");
toast.innerText = "Le fichier a bien été enregistré";

// Affichage de la nouvelle balise en tant qu'enfant de la div.
btn.addEventListener("click",function(){

toast.appendChild(toastp);
ctnToasts.appendChild(toast);
});

// Suppression d'une balise
 setTimeout(() => {
        toast.remove();
    }, 3000);



