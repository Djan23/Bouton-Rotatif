var angle;
var btnRotatif = document.getElementById("imgBtn");
var divBtn = document.getElementById('divBtn');

/********** Listeners  *********/
btnRotatif.addEventListener("mousemove", animBtnRot);
btnRotatif.addEventListener("touchmove", animBtnRot);

// Animation du bouton rotatif
function animBtnRot(e) {
    console.clear();
    e.preventDefault();
    /************dimensions du bouton ***************/
    var btnHeight = parseInt(getComputedStyle(divBtn).height);
    var btnWidth = parseInt(getComputedStyle(divBtn).width);
    /************coordonnées du bouton ***************/
    var xBtn = parseInt(getComputedStyle(divBtn).left);
    var yBtn = parseInt(getComputedStyle(divBtn).top);
    /************coordonnées du pointeur ***************/
    if (e.type === "mousemove"){
      var xPointeur = e.clientX;
      var yPointeur = e.clientY;
    } else if (e.type === "touchmove") {
      var xPointeur = e.changedTouches[0].pageX;
      var yPointeur = e.changedTouches[0].pageY;
    }
    /************coordonnées corrigées du pointeur ***************/
    /** c'est à dire qu'on obtient les coordonnée du pointeur à l'intérieur de  divBtn*/
    xPointeur = xPointeur - xBtn;
    yPointeur = yPointeur - yBtn;

    /*** Calcul de l'angle ***********/
    /***************si on clique dans le coin supérieur droit **************/
    if ((xPointeur > (btnWidth/2)) && (yPointeur < (btnHeight/2))) {
      var coteOppose = xPointeur - (btnWidth/2);
      var coteAdjacent = btnHeight - (btnHeight/2) - yPointeur;
      angle = (Math.atan(coteOppose / coteAdjacent) * 180) / Math.PI;
    }
    /***************si on clique dans le coin inférieur droit **************/
    else if ((xPointeur > (btnWidth/2)) && (yPointeur > (btnHeight/2))) {
      var coteOppose = yPointeur - (btnHeight/2);
      var coteAdjacent = xPointeur - (btnWidth/2);
      angle = ((Math.atan(coteOppose / coteAdjacent) * 180) / Math.PI) + 90;
    }
    /***************si on clique dans le coin inférieur gauche **************/
    else if ((xPointeur < (btnWidth/2)) && (yPointeur > (btnHeight/2))) {
      var coteOppose = (btnWidth/2) - xPointeur;
      var coteAdjacent = yPointeur - (btnHeight/2);
      angle = ((Math.atan(coteOppose / coteAdjacent) * 180) / Math.PI) + 180;
    }
    /***************si on clique dans le coin supérieur gauche **************/
    else if ((xPointeur < (btnWidth/2)) && (yPointeur < (btnHeight/2))) {
      var coteOppose = (btnHeight/2) - yPointeur;
      var coteAdjacent = (btnHeight/2) - xPointeur ;
      angle = ((Math.atan(coteOppose / coteAdjacent) * 180) / Math.PI) + 270;
    }

    e.target.style.transform = 'rotate(' + angle + 'deg)';
    console.log('angle = ' + angle);
}
