function guessNumber() {
    const secretNumber = Math.floor(Math.random() * 10) + 1;
    let guess; 

    alert("Myslím si číslo od 1 do 10. Máš 3 pokusy!");

    for (let i = 1; i <= 3; i++) {
        const input = prompt(i + ". pokus: Zadaj svoj tip (1-10):");
        guess = Number(input);

        if (guess === secretNumber) {
            alert("Gratulujem! Uhádol si na " + i + ". pokus.");
            break; 
        } 
         if (i < 3)
         if (guess < secretNumber) {
            alert("Moje číslo je VÄČŠIE.");
        } else if (guess > secretNumber) {
            alert("Moje číslo je MENŠIE.");
        } else {
            alert("Nezadal si platné číslo. Stratil si pokus.");
        }
    }

    if (guess !== secretNumber) {
        alert("Prehral si. Moje číslo bolo: " + secretNumber);
    }
}
guessNumber();