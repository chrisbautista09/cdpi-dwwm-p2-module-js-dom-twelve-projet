
// 1. Je récupère le bouton burger dans le DOM
const burger = document.querySelector(".burger");

// 2. Je récupère la fenêtre (ou le menu) modal dans le DOM
const modal = document.querySelector(".modal");

// 3. J’écoute le clic sur le bouton burger
burger.addEventListener("click", function () {

    // 3.1 J’ajoute/retire la classe "fa-x" au burger 
        burger.classList.toggle("fa-x");

    // 3.2 J’ajoute/retire la classe "show-modal" à la fenêtre modal
        modal.classList.toggle("show-modal");
});
