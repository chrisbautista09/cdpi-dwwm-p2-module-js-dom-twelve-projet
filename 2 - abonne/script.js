/*
Nouvelles compétences:
 - Font awesome
 - type Boolean
 - if else
 - HTMLElement.classList
    - toggle Inverse l'etat de la classe : present ou pas
    * add
    * remove
    * replace
*/

// 1. Je recupere l'icone smiley

const smiley_elem =  document.querySelector("#emoji");

// 2. Je recupere le bouton ABONNER

const btnSub_elem =  document.querySelector(".btn-sub");


// 3. Je défini une variable binaire qui exprime l'etat abonné ou non de l'utilisateur

let subscriberState_elem = false;

// 4. J'ecoute le clique sur l'icone smiley

 smiley_elem.addEventListener("click", () => {
    smiley_elem.classList.toggle("fa-face-smile-wink");
      smiley_elem.classList.toggle("fa-face-meh") ;
      smiley_elem .classList.toggle("happy");
      });

// 5. J'ecoute l'evenemment click sur le bouton ABONNEZ

btnSub_elem.addEventListener("click", () => {
    subscriberState_elem = !subscriberState_elem ; 
    
  if (subscriberState_elem ) { 
  btnSub_elem.classList.toggle("abonne");
  btnSub_elem.innerText = "Abonné";
  console.log("if");
  }

  else {
  btnSub_elem.classList.toggle("btn-sub");
  btnSub_elem.innerText = "Abonnez-vous";
  console.log("else");
    }
      
    });


//<button id="btn">Activer/Désactiver</button>

