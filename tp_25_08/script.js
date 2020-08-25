var vDateJour = document.getElementById("divDateJour");

var vBtnQF = document.getElementById("btnQF").addEventListener("click",afficherConseil);

//créer un objet date 

var dDay = new Date();

afficheDate();

function afficheDate()
{
    const options = {
        weekday : 'long',
        year: 'numeric',
        month: 'long',
        day:'numeric'
    };
    vDateJour.innerHTML = dDay.toLocaleDateString('fr-FR', options);
}

function afficherConseil()
{
    var numJourSem = dDay.getDay();
    console.log(numJourSem);

    let numJourMois = dDay.getMonth();

    var monConseil;
    let monConseilDumois;

    switch(numJourSem)
    {
        case 0 : 
            monConseil = "Un peu de repos bien mérité.";
            break;
        case 1 :
            monConseil = "Fais ce que tu as à faire, voyons";
            break;
        case 2 :
            monConseil = "Prends le temps de regarder la nature";
            break;
        case 3 :
            monConseil = "Un petit déjeuner copieux c'est mieux";
            break;
        case 4 : 
            monConseil = "Apprends quelque chose de plus par jour";
            break;
        case 5 :
            monConseil = "Fais la liste des choses à faire";
            break;
        case 6 : 
            monConseil = "Fais une des choses de ta liste";
            break;
        default :
        monConseil = "Bizarre bizarre autant qu'étrange";
        break;
    }

    switch (numJourMois){
        case 0 :
            monConseilDumois = " Dommage fait froid ";
            break;
        case 1 :
            monConseilDumois = "Dommage fait toujours encore froid";
            break;
        case 2 :
            monConseilDumois = "Ca commence à se rechauffer mais bon";
            break;
        case 3 :
            monConseilDumois = "En avril ne te découvre pas d'un fil ! ";
            break;
        case 4 :
            monConseilDumois = "En mai fait ce qu'il te plait ! ";
            break;
        case 5 :
            monConseilDumois = "Je connais pas le dicton de juin ";
            break;
        case 6 :
            monConseilDumois = "En juillet c'est les vacanes ";
            break;
        case 7 :
            monConseilDumois = "Aout c'est la canicule ";
            break;
        case 8 :
            monConseilDumois = "Septembre je sais pas";
            break
        default :
            monConseilDumois = "Par default le rete du temps fait froid";
    }
    //afficher la valeur de monConseil dans divConseil
    document.getElementById("divConseil").innerHTML = monConseil;
    document.getElementById("divConseilMois").innerHTML = monConseilDumois
}

