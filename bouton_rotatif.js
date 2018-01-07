// La valeur de la propriété transform:rotate du bouton rotatif
var angle = 0; // à zéro au moment du chargement de toute façon

var btnRotatif = document.getElementById("imgBtn");

// Les coordonnées du boutons sont données en dur dans le code
// Il faut changer ça mais bon pour l'instant on fait aller...
var xBtn = 100;
var yBtn = 100;

/********** Listeners  *********/
btnRotatif.addEventListener("click", animBtnRotatif)
btnRotatif.addEventListener("mousemove", animBtnRotatif);
btnRotatif.addEventListener("touchmove", animBtnRotatif);

function animBtnRotatif(e) {
    console.clear();
    console.log(e);
    console.log(e.target);
    /************coordonnées du bouton ***************/
    // var xBtn = e.target.x;
    // var xBtn = e.target.style.left;
    // var xBtn = getComputedStyle(btnRotatif).left;
    // var xBtn = 100;
    console.log( 'xBtn = ' + xBtn );
    // var yBtn = e.target.y;
    // var yBtn = 100;
    console.log( 'yBtn = ' + yBtn );
    /************dimensions du bouton ***************/
    var btnHeight = e.target.offsetHeight;
    console.log( 'btnHeight = ' + btnHeight );
    var btnWidth = e.target.offsetWidth;
    console.log( 'btnWidth = ' + btnWidth );    
    /************coordonnées du pointeur ***************/
    var xPointeur = e.x;
    console.log( 'xPointeur = ' + xPointeur );
    var yPointeur = e.y;
    console.log( 'yPointeur = ' + yPointeur );
    /************coordonnées corrigées du pointeur ***************/
    xPointeur = xPointeur - xBtn;
    console.log( 'xPointeur corrigé = ' + xPointeur );
    yPointeur = yPointeur - yBtn;
    console.log( 'yPointeur corrigé = ' + yPointeur );

    // Calcul de l'angle 
    /***************si on clique dans le coin supérieur droit **************/
    if ((xPointeur > (btnWidth/2)) && (yPointeur < (btnHeight/2))) {
        var coteOppose = xPointeur - (btnWidth/2);
        var coteAdjacent = btnHeight - (btnHeight/2) - yPointeur;
        angle = Math.floor(((Math.atan(coteOppose / coteAdjacent)) * 180) / Math.PI);
    }
    /***************si on clique dans le coin inférieur droit **************/
    else if ((xPointeur > (btnWidth/2)) && (yPointeur > (btnHeight/2))) {
        var coteOppose = yPointeur - (btnHeight/2);
        var coteAdjacent = xPointeur - (btnWidth/2);
        angle = Math.floor((((Math.atan(coteOppose / coteAdjacent)) * 180) / Math.PI) + 90);
    }
    /***************si on clique dans le coin inférieur gauche **************/
    else if ((xPointeur < (btnWidth/2)) && (yPointeur > (btnHeight/2))) {
        var coteOppose = (btnWidth/2) - xPointeur;
        var coteAdjacent = yPointeur - (btnHeight/2);
        angle = Math.floor((((Math.atan(coteOppose / coteAdjacent)) * 180) / Math.PI) + 90 + 90);
    }
    /***************si on clique dans le coin supérieur gauche **************/
    else if ((xPointeur < (btnWidth/2)) && (yPointeur < (btnHeight/2))) {
        var coteOppose = (btnHeight/2) - yPointeur;
        var coteAdjacent = (btnHeight/2) - xPointeur ;
        angle = Math.floor((((Math.atan(coteOppose / coteAdjacent)) * 180) / Math.PI) + 90 + 90 + 90);
    }

    e.target.style.transform = 'rotate(' + angle + 'deg)';
    console.log('angle = ' + angle + ' deg');
}
