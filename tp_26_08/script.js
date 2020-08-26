var vBudget = 20;
var vRepas  = 0;

document.getElementById("hBudget").innerHTML = vBudget;

document.getElementById("btnCommander").addEventListener("click", acheterSW);

function acheterSW() {

    reinitFormu();

    let nmbrJour = 0 ;

    while (nmbrJour <= 4){
        let prix = calculerPrixDuJour();
        let nmbrSandwich = document.getElementById('hNSandwiches').value;
        let total = nmbrSandwich * prix ;

        if (total<vBudget){
            vBudget -= total;
            vRepas++;
            alert("Bravo ! Vous avez reussi à manger toute la semaine !");
        } else {
            alert("Vous n'avez plus d'argent ! ");
            nmbrJour = 5 ;
        }
        nmbrJour++;
    }
}

function calculerPrixDuJour() {
    var prixSW = (Math.random() * (5 - 1) + 1).toFixed(2);
    return prixSW;
}

function reinitFormu() {
    vBudget = 20;
    vRepas  = 0;
    document.getElementById("hTicket").innerHTML = "";
}