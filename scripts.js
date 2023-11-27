/*const aventuriersLocal = [
    {
        "id": "1",
        "nom": "Oral Schmeler IV",
        "couleur": "#6c6b67",
        "avatar" : "https://picsum.photos/id/76/200"
    },
    {
        "id": "2",
        "nom": "Tad McLaughlin",
        "couleur": "#5d5c62",
        "avatar" : "https://picsum.photos/id/65/200"
    },
    {
        "id": "3",
        "nom": "Matteo Wunsch",
        "couleur": "#454f41",
        "avatar" : "https://picsum.photos/id/64/200"
    },
    {
        "id": "4",
        "nom": "Jack Beahan MD",
        "couleur": "#386b1f",
        "avatar" : "https://picsum.photos/id/22/200"
    }
];*/

/*
Fonction qui à partir
 */

function creerCarte(aventurier){
    $("#aventuriers").append(`
     <li class="card col-3 m-2">
     <img src="${aventurier.avatar}" class="card-img-top m-2" alt="Avatar de ${aventurier.nom}">
     <div class="card-body">
        <h2 class="card-title h5">${aventurier.nom}</h2>
        <div class="card-text">
        <label for="heros-${aventurier.id}">Ma couleur préférée :</label>
        <input type="color" value="${aventurier.couleur}" id="heros-${aventurier.id}" disabled>
        </div>
       <a href="#" class="btn btn-primary">Voir détails</a>
     </div>
    </li>`);
}

/* localement
aventuriersLocal.forEach(function (aventurier){
    creerCarte(aventurier)
})*/

/*facon JavaScript (sans biblioteque)*/
fetch('aventuriers_locals.json')
    .then(function (reponse){
        //Un problème s'est produit
        if(!reponse.ok){
            //lancer une expedition (pas de distinction de syntaxe entre exception et erreur)
            throw new Error ("Erreur "+reponse.status);
        }
        return reponse.json();
    })
    .then(function (aventuriers) {
        aventuriers.forEach(function (aventurier) {
            creerCarte(aventurier);
        });
    })
    //attraper et gérer
    .catch(function (erreur) {
        $('.alert').text(erreur.message).removeClass('d-none');
    });


/* facon JQuery

$.getJSON('aventuriers_locals.json')
    .done(function(aventuriers){
        aventuriers.forEach(function (aventurier) {
            creerCarte(aventurier)
        });
    })
    .fail(function (error){
        $('.alert').text(error.status).removeClass('d-none')
    });*/



