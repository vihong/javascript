(function () {
    var numberToGuess = getRandomInt(11);
    var tentative = 2;
    console.log(numberToGuess);

    var answer = window.prompt("Devinez notre chiffre entre 0 et 10 (bornes incluses)");
    while (answer != numberToGuess && tentative > 0)
    {        
        if (answer > numberToGuess)
            alert(`Plus bas...\nIl vous reste ${tentative} tentatives`);
        else
            alert(`Plus haut...\nIl vous reste ${tentative} tentatives`);
        tentative--;
        answer = window.prompt("Devinez notre chiffre entre 0 et 10");
    }
    if (answer == numberToGuess)
    {
        alert(`GAGNÉ : vous avez trouvé !!! Le chiffre à deviner était bien ${numberToGuess} !`)
        return
    }
    else
    {
        alert(`PERDU : vous n'avez pas trouvé... Le chiffre à deviner était ${numberToGuess} !`)
        return
    }
})();


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}


/*

PSEUDO CODE
générer un chiffre en tre 0 et 10 et demander au
bravo
au dessus
en dessous
3 tentatives au total seulement

prompt et alert

*/