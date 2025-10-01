/**
 * firstChild
 * lastChild
 * childNodes
 * nextSibiling MAIS preferez nextElementSibiling pour eviter de selectionner les passages à la ligne
 * previousSibiling MAIS preferez previousElementSibiling  pour eviter de selectionner les passages à la ligne
 * 
 */


// 1. Je recupere toutes les questions
const questions = document.querySelectorAll(".question");

// 2. Je parcours toutes les questions
questions.forEach(function(question) {
   
     

    // 3. Lors du click sur la question
    question.addEventListener("click",function(){
        
        // 4. Je récupère la réponse correspondante
        const reponse = question.nextElementSibling;

        // 5. Je récupère aussi le chevron
        const chevron = question.querySelector(".fa-solid fa-chevron-down btn-arrow");

        // 6. Toggle de la réponse (affiche/masque)
        reponse.classList.toggle("show-reponse");

        // 7. Toggle du chevron (ex: rotation vers le bas/haut)
        if (chevron) {
            
            chevron.classList.toggle("fa-chevron-up");
        }
    });
});



// para_elem.innerText = "Nouveau texte pour mon paragraphe !";
