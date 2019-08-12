(function () {
    var numberToGuess = getRandomInt(11);
    var tentative = 2;
    console.log(numberToGuess);

    var answer = window.prompt("Devinez notre chiffre entre 0 et 10");
    while (answer != numberToGuess && tentative > 0)
    {        
        if (answer > numberToGuess)
            alert(`Plus bas...\nPlus que ${tentative} tentatives`);
        else
            alert(`Plus haut...\nPlus que ${tentative} tentatives`);
        tentative--;
        answer = window.prompt("Devinez notre chiffre entre 0 et 10");
    }
    if (answer == numberToGuess)
    {
        alert(`Bravo, c'est trouvé, vous avez GAGNÉ`)
        return
    }
    else
    {
        alert(`Dommage, vous n'avez pas trouvé, vous avez PERDU`)
        return
    }
})();


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}















/*
générer un chiffre en tre 0 et 10 et demander au
bravo
au dessus
en dessous
3 tentatives au total seulement

prompt et alert

*/







/*(function () {
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
*/
