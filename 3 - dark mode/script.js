/*
Nouvelles compétences:
- forEach
- querySelectorAll
*/

// 0. On récupère l'icône soleil/lune dans le HTML
const sun_elem = document.querySelector(".icon");

// 1. On sélectionne toutes les balises HTML de la page
const toutesLesBalises = document.querySelectorAll('*');

// 2. On récupère le bouton qui va servir à activer/désactiver le mode sombre
const switchBtn = document.querySelector(".switch");

// 3. On écoute l'événement "click" sur ce bouton
// → chaque fois que l'utilisateur clique sur le bouton, la fonction à l'intérieur se déclenche
switchBtn.addEventListener("click", function () {

    // 4. Pour chaque balise trouvée, on bascule la classe "darkmode"
        toutesLesBalises.forEach(function(element) { 
        element.classList.toggle("darkmode");
    });

    // 5. On bascule l’icône soleil ↔ lune
      sun_elem.classList.toggle("fa-moon");
    sun_elem.classList.toggle("fa-sun");
});
 
    



     































