let valider = document.getElementById('btn');
valider.addEventListener('click', maFonction);

function maFonction(){

    let team = document.getElementById("listeDeroulante").value;

    switch (team) {
        case 'chien':
            alert("Tu es team chien ! Nice")
            break;
         case 'chat' :
            alert("Tu es team chat ! Pas bien !")
            break;
        default :
             alert("Tu n'as rien choisi boulet !")
        }
    }