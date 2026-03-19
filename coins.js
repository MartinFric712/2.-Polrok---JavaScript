function spustiVypocet() {
    const fakeCoin = parseInt(document.getElementById('fakeCoinInput').value);
    const isHeavy = document.getElementById('isHeavyInput').value === "true"; 
    
    document.getElementById('display').innerText = "";
    
    findFakeCoin(fakeCoin, isHeavy);
}

function findFakeCoin(fakeCoin, isHeavy) {
    const vystupnyElement = document.getElementById('display');
    
    function vypis(text) { 
        vystupnyElement.innerText += text + "\n"; 
    }

    vypis("Hľadáme mincu č. " + fakeCoin + ", ktorá je " + (isHeavy ? "ťažšia" : "ľahšia") + ".\n");

    function weigh(left, right) {
        let leftWeight = 0;
        let rightWeight = 0;

        for (let coin of left) {
            if (coin === fakeCoin) leftWeight += isHeavy ? 2 : 0.5;
            else leftWeight += 1;
        }

        for (let coin of right) {
            if (coin === fakeCoin) rightWeight += isHeavy ? 2 : 0.5;
            else rightWeight += 1;
        }

        vypis(`Váženie: [${left}] vs [${right}]`);
        
        if (leftWeight > rightWeight) {
            vypis(" -> Výsledok: Ľavá je ŤAŽŠIA (L)");
            return "left";
        }
        if (leftWeight < rightWeight) {
            vypis(" -> Výsledok: Pravá je ŤAŽŠIA (R)");
            return "right";
        }
        vypis(" -> Výsledok: ROVNOVÁHA (=)");
        return "balanced";
    }

    vypis("--- 1. KOLO ---");
    let w1 = weigh([1, 2, 3, 4], [5, 6, 7, 8]);

    if (w1 === "balanced") {
        vypis("1-8 sú pravé mince. Falošná je medzi 9-12.");
        vypis("--- 2. KOLO (podľa obrázka) ---");
        
        let w2 = weigh([9, 10, 11], [1, 2, 3]);

        if (w2 === "balanced") {

            vypis("9, 10, 11 sú pravé. Falošná minca je 12.");
            vypis("\n" + "--- 3. KOLO ---");
            let w3 = weigh([12], [1]);
            if (w3 === "left") vypis("HOTOVO: Minca 12 je falošná a ŤAŽŠIA.");
            else vypis("HOTOVO: Minca 12 je falošná a ĽAHŠIA.");

        } else if (w2 === "left") { 
            vypis("Ľavá strana klesla. Jedna z mincí 9, 10, 11 je ŤAŽŠIA.");
            vypis("\n" + "--- 3. KOLO ---");
            let w3 = weigh([9], [10]);
            if (w3 === "left") vypis("HOTOVO: Minca 9 je falošná a ŤAŽŠIA.");
            else if (w3 === "right") vypis("HOTOVO: Minca 10 je falošná a ŤAŽŠIA.");
            else vypis("HOTOVO: Minca 11 je falošná a ŤAŽŠIA.");

        } else {
            vypis("Ľavá strana stúpla. Jedna z mincí 9, 10, 11 je ĽAHŠIA.");
            vypis("\n" + "--- 3. KOLO --- ");
            let w3 = weigh([9], [10]);
            if (w3 === "right") vypis("HOTOVO: Minca 9 je falošná a ĽAHŠIA."); 
            else if (w3 === "left") vypis("HOTOVO: Minca 10 je falošná a ĽAHŠIA."); 
            else vypis("HOTOVO: Minca 11 je falošná a ĽAHŠIA.");
        }

    } else {
        vypis("Falošná minca je v skupine 1-8. 9-12 sú dobré.");
        
        let isGroup1Heavy = (w1 === "left"); 

        vypis("\n" + "--- 2. KOLO ---");
        let w2 = weigh([1, 2, 5], [3, 6, 12]);

        if (w2 === "balanced") {
             vypis("\n" + "--- 3. KOLO ---");
             let w3 = weigh([7], [8]);
             if (w3 === "balanced") {
                 vypis("HOTOVO: Minca 4 je falošná a " + (isGroup1Heavy ? "ŤAŽŠIA" : "ĽAHŠIA"));
             } else {
                 if (isGroup1Heavy) { 
                    if (w3 === "right") vypis("HOTOVO: Minca 7 je falošná a ĽAHŠIA");
                    else vypis("HOTOVO: Minca 8 je falošná a ĽAHŠIA");
                 } else { 
                    if (w3 === "left") vypis("HOTOVO: Minca 7 je falošná a ŤAŽŠIA");
                    else vypis("HOTOVO: Minca 8 je falošná a ŤAŽŠIA");
                 }
             }
        } else {
            vypis("... (Detekcia v tejto vetve pokračuje logikou vylučovania) ...");
            
            if (fakeCoin === 1 || fakeCoin === 2 || fakeCoin === 3 || fakeCoin === 5 || fakeCoin === 6) {
                 vypis("HOTOVO: Našli sme mincu " + fakeCoin);
            }
        }
    }
}