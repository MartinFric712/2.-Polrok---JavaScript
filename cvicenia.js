
// podmienky IF

let vek = 19

let malListok = false

let den = "pondelok"

if ((vek >= 18 || malListok) && den === "pondelok") {
    console.log("True");
} else {
    console.log("False");
    
}


// 1.Uloha

let age = 19

if (age >= 18) {
    console.log("Plnolety");
}
else {
    console.log("Neplnolety");
}


// 2.Uloha

let cislo = 6

if (cislo % 2 === 0) {
    console.log("Parne");
}
else {
    console.log("Neparne");
}


// 3.Uloha

let score = 90

if (score >= 90) {
    console.log("vyborny")
}
else if (score >= 70) {
    console.log("dobry")
}
else {
    console.log("Nedostatocny")
}


// 4.Uloha

let den1 = "utorok"

if (den1 === "sobota" || den1 === "nedela") {
    console.log("Je vikend")
}
else {
    console.log("Je pracovny den")
}


// 5.Uloha

let vek1 = 18
let maListok1 = false

if ((vek >= 15 && maListok1) || vek >= 18) {
    console.log("Mozes ist do kina")
}


// 6.Uloha

let isBlocked = true

if (isBlocked) {
    console.log("Pristup povoleny")
}
else {
    console.log("Pristup zamietnuty")
}


// 7.Uloha

let cislo1 = 9

if (cislo1 % 3 === 0) {
    console.log("Fizz")
}
else {
    console.log(cislo1)
}



// podmienky ZNAMKY

let znamka = 1


/*if (znamka === 1) {
    console.log("Vyborny")
}
else if (znamka === 2) {
    console.log("Chvalitebny")
} 
else if (znamka === 3) {
    console.log("Dobry")
}
else if (znamka === 4) {
    console.log("Dostatocny")
}
else if (znamka === 5) {
    console.log("Nedostatocny")
}*/




switch(znamka) {
    case 1 :
        console.log("Vyborny")
        break;
    case 2:
        console.log("Chvalitebny")
        break;
    case 3:
        console.log("Dobry")
        break;
    case 4:
        console.log("Dostatocny")
        break;
    case 5:
        console.log("Nedostatocny")
         break;
    default:
        console.log("WTF")
        break;
}


// FOR cyklus

for (let i = 5; i <= 25; i++)
console.log(i);