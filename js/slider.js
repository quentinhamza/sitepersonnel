$(function() {

    console.log('toto') // savoir si ça marche

    const menu = $('#main-menu');
     $(window).scroll(function() {
        if ($(window).scrollTop() >= 40) {
            console.log('toto')
            menu.removeClass('menu-scroll');

        } else {
            menu.addClass('menu-scroll')
        }
    });
 });
 
 function boutons(n) {
    affichage(diaporama += n);
}

function actifIndic(n) {
    affichage(diaporama = n); 
} 

function affichage(n) { 

    let i; 
    let diapoImg = document.getElementsByClassName("diapo"); // je selectionne un element du DOM par la class "diapo" et je le mets dans la variable diapoImg
    let indic = document.getElementsByClassName("demo"); // Je selectionne un element duu DOM par la classe "demo" et je le mets dans la variable indic

    if (n > diapoImg.length) {diaporama = 1} // opérateur conditionnel : si la valeur de la variable n supérieure au nombre de valeurs dans "diapoImg" la variable diaporama est également

    if (n < 1) {diaporama = diapoImg.length} // Si la variable n est inférieur à 1, la variable diaporama est égal au nombre de valeurs dans la valeur "DiapoImg"

    for (i = 0; i < diapoImg.length; i++) { // Pour une variable i qui est égale à 0 et tant que cette variable est inférieur à 1, la variable diaporama est égale au nombre de valeurs dans la variable "DiapoImg"

        diapoImg[i].style.opacity = "0"; // Je chance l'opacité de la valeur i de la variable tableau DiapoImg
    }

    for (i = 0; i < indic.length; i++) { // Pour une variable i qui est égale à 0 et tant que cette valeur est inférieure au nombre de nombre de valeurs dans la valeur "indic"

        indic[i].className = indic[i].className.replace(" numeros", ""); // suppresion de la classe "numeros" pour la valeur i de la variable tableau indic
    }
    diapoImg[diaporama-1].style.opacity = "1"; 

    indic[diaporama-1].className += " numeros"; // pour la valeur  diaporama-1 de la variable tableau indic, j'ajoute la classe "numeros"
}

let diaporama = 1; //je définis la variable diaporama à 1
affichage(diaporama); // j'éxecute la fonction d'affichage en envoyant le diaporama en argument

for ( i = 0; i < 3; i++ ) {
    // je passe 3 fois dans la boucle

    //premier passage dans la boucle : 
    // i = 0
    // indic[0] = <button class="demo" onclick="actifIndic(1)">1</button>"
    // indic[0].className = demo
    // indic[0].className = indic[0].className.replace("")
    
    indic[i].className = indic[i]
} 
