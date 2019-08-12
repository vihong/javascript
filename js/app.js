(function () {
    const nb = getRandomInt(11);
    let essai = 2;
    console.log(nb);
    let answer = window.prompt("Deviner le chiffre entre 0 et 10");

    while (answer != nb && essai > 0) {
        if (answer < nb)
            alert("Au-dessus...");
        else 
            alert("En-dessous...");
        answer = window.prompt(`Deviner le chiffre entre 0 et 10. \nReste : ${essai} essai(s)`);
        essai--;   
    }
    if (answer == nb && essai != 0) {
        alert("Bravo !!!");
        return;        
    }
    else{
        alert(`Reste ${essai} essai.\nC'est PERDU...`);
        return;    
    }


})();

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
};


/*
générer un chiffre en tre 0 et 10 et demander au
bravo
au dessus
en dessous

prompt et alert

*/