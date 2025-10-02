/**
 * let
 * element.getAttribute()
 * element.setAttribute()
 * ++ operator
 * operateur ternaire
 */

// 1. Je recupere toutes les petites vignettes
const vignettes = document.querySelectorAll(".small");
// 2. Je recupere la grande photo
const fullImg = document.getElementById("full");

// 3. Je recupere le bouton AJOUTER
const btnAdd = document.querySelector(".btn-add");

// 4. Je recupere la balise vide de message d'ajout du panier
const panierMsg = document.querySelector(".panier-msg");
// 5. Je crée une variable qui contient le nombre de produits ajoutées ua panier
let panier = 0;

// 6. J’ajoute un écouteur de clic sur chaque vignette
vignettes.forEach(function(vignette) {

    vignette.addEventListener("click", function() {

        // Je récupère la source de la vignette cliquée
        const newUrl = vignette.getAttribute("src");

        // Je mets cette source dans la grande image
        fullImg.setAttribute("src", newUrl);
    });
});

// 7. J'incrémente mon panier de +1 à chaque click sur le btn "ajouter au panier"
btnAdd.addEventListener("click",function() {
 panier ++;
panierMsg.innerText = `Vous avez ${panier}  produit(s) dans votre panier.`;
});

