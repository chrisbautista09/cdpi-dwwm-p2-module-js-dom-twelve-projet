/**
 * removeEventListener
 * Scroll Event
 */

// 1. Je recupere la section à partir de laquelle je veux faire apparaite la modale
const section1 = document.querySelector(".one");

// 2. Je recupere la modale
const modal = document.querySelector(".modal");
// 3. Je recupere le bouton quitter de la modale
const modalQuit = document.querySelector(".modal-quit");

// 4. setTimeout déclenche l'evenement  de la fenetre modal
setTimeout ( function ()  {modal.style.display = "flex"; }, 3000);

// 5. Je fais disparaite la modale au clique sur la croix
modalQuit.addEventListener("click",function(){
    
    modal.remove(".modal");
   
});




