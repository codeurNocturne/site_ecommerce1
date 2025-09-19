var body = document.getElementById("container");
var choix = document.getElementById("overlay");
var categorie1 = document.getElementById("choixcategorie");
categorie1.addEventListener("click",categorie);
modal= document.getElementById("modal");
goacc= document.getElementById("goaccueil");
function categorie(e){
    choix.style.display="block"
    modal.style.display="block"
}
modal.addEventListener('click',remove);
function remove(e){
    choix.style.display="none"
    modal.style.display="none"
}
var boutonperuques = document.getElementById("peruques");
var accueil = document.getElementById("ACCUEIL");
var chaussures = document.getElementById("chaussures")
boutonperuques.addEventListener("click",afficherchaussures);
function afficherchaussures(e){
    accueil.style.display='none'
    chaussures.style.display="block";
    choix.style.display= "none"
}
goacc.addEventListener("click",partir_accueill);
function partir_accueill(e){
    accueil.style.display='block'
    chaussures.style.display="none";
    choix.style.display= "none"
    modal.style.display="none"
}
var icon = document.querySelector('.like')
icon.addEventListener("click",changerIcone)
function changerIcone() {
            const icone = document.getElementById("icone");
            // Vérifier quelle icône est actuellement affichée
            if (icone.classList.contains("far fa-heart")) {
                icone.classList.remove("far fa-heart");
                icone.classList.add("fas fa-heart");
            } else {
                icone.classList.remove("fas fa-heart");
                icone.classList.add("far fa-heart");
            }
}