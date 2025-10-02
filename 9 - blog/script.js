/**
 * Template string `${}`
 * innerHTML ou template
 * += operator
 */

// 1. Je recupere le conteneur de publications
const postsContainer = document.querySelector(".posts");

// 2. Voici ma base de données factise 
const posts = 
[
    {
        titre:"SEO, les bonnes pratiques",
        hashtag:"#SEO",
        link:"#",
        extrait:"Mollit ut mollit esse exercitation nisi ut labore velit anim pariatur sit deserunt anim. Dolore consequat aliquip esse elit culpa aliqua. Consectetur mollit irure minim incididunt nulla non. Ad sunt mollit aliqua minim fugiat et minim commodo. Anim proident incididunt veniam duis cupidatat irure eu. Elit nulla nisi ea laborum mollit excepteur enim ut Lorem. Cupidatat minim consectetur mollit in ut consectetur est duis do sint cillum nisi."
    },
    {
        titre:"Bien, les bonnes pratiques",
        hashtag:"#JS",
        link:"#",
        extrait:"Mollit ut mollit esse exercitation nisi ut labore velit anim pariatur sit deserunt anim. Dolore consequat aliquip esse elit culpa aliqua. Consectetur mollit irure minim incididunt nulla non. Ad sunt mollit aliqua minim fugiat et minim commodo. Anim proident incididunt veniam duis cupidatat irure eu. Elit nulla nisi ea laborum mollit excepteur enim ut Lorem. Cupidatat minim consectetur mollit in ut consectetur est duis do sint cillum nisi."
    },
    {
        titre:"Content, les bonnes pratiques",
        hashtag:"#PHP",
        link:"#",
        extrait:"Mollit ut mollit esse exercitation nisi ut labore velit anim pariatur sit deserunt anim. Dolore consequat aliquip esse elit culpa aliqua. Consectetur mollit irure minim incididunt nulla non. Ad sunt mollit aliqua minim fugiat et minim commodo. Anim proident incididunt veniam duis cupidatat irure eu. Elit nulla nisi ea laborum mollit excepteur enim ut Lorem. Cupidatat minim consectetur mollit in ut consectetur est duis do sint cillum nisi."
    }
];

 
    // 3. Je parcours la bdd
posts.forEach(function(post, index){

    // Vérif console : affiche les données en cours
    console.log(post.titre);   // Affiche le titre de l'article courant
    console.log(post.extrait); // Affiche l'extrait de l'article courant

    // 4. Je crée un bloc HTML pour le post
    const postHTML = `
        <article class="post">
        <h2 class="post-titre"><a href="${post.link}">${post.titre}</a></h2>
        <p class="post-extrait">${post.extrait}</p>
        <p><a class="post-hashtag" href="${post.link}">${post.hashtag}</a></p>
    </article>
    `;

    // 5. J'ajoute le post dans le conteneur
    postsContainer.innerHTML += postHTML;
});

