var body = document.getElementById("container");
var choix = document.getElementById("overlay");
var categorie1 = document.getElementById("choixcategorie");
categorie1.addEventListener("click",categorie);
modal= document.getElementById("modal");
goacc= document.getElementById("goaccueil");
// ici je fais apparaitre la box des categories
function categorie(e){
    choix.style.display="block"
    modal.style.display="block"
}
// je fais disparaitre la box des categories des qu'on clique sur l'appareil plan
modal.addEventListener('click',remove);
function remove(e){
    choix.style.display="none"
    modal.style.display="none"
}
var boutonperuques = document.getElementById("peruques");
var accueil = document.getElementById("ACCUEIL");
var chaussures = document.getElementById("chaussures")
boutonperuques.addEventListener("click",afficherchaussures);
place=document.querySelector(".search1")
// afficher la page des peruques
function afficherchaussures(e){
    accueil.style.display='none'
    chaussures.style.display="block";
    choix.style.display= "none"
    place.placeholder='recherchez dans les peruques'
}
goacc.addEventListener("click",partir_accueill);
// revenir a l'acceiul
function partir_accueill(e){
    accueil.style.display='block'
    chaussures.style.display="none";
    choix.style.display= "none"
    modal.style.display="none"
    place.placeholder='rechercher un article'
}
// faire un like
var icon = document.querySelectorAll('.like')
icon.forEach(like =>{
    like.addEventListener('click',function(){
        this.className=this.className==="fas fa-heart pl-5 like"?"far fa-heart pl-5 like":"fas fa-heart pl-5 like"
        this.style.color=this.style.color==='red'?'white':'red'
    })
} 
)
// appliquer l'effet de loupe
var loupe = document.querySelectorAll('.loup')
var scale = document.querySelectorAll('.scale')
loupe.forEach(loup =>{
    scale.forEach(scale=>{
        loup.addEventListener('click',function(){
        this.nextElementSibling.style.transform=this.nextElementSibling.style.transform==='scale(1.2)'?'scale(1)':'scale(1.2)'
        scale.style.transition='1s'
        })
    }   
    )
} 
)
