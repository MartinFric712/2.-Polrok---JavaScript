/*let fruit1 = "apple";
let fruit2 = "banana";
let fruit3 = "mango";

let fruits = ["apple", "banana", "mango"];

console.log(fruits[1]);

fruits[1] = "yellow";

console.log(fruits[1]);
console.log(fruits.length);
console.log(fruits[fruits.length = 1]);

fruits.push("orange");
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.shift();
console.log(fruits);
fruits.unshift("pear");
console.log(fruits);

for (let fruit of fruits) {
    console.log(fruit);
}

let i = 0
while (i < fruits.length) {
    console.log(fruits[i]);
    i++;
}

let mixed = ["Julius", 33, true, null];
console.log(mixed);*/



// Ulohy na array

let meals = ["Hambruger", "Bryndzove pirohy", "Pizza", "Chicken Tikka Masala", "BigMac Tacos"]

// 1.Uloha
console.log(meals);

// 2.Uloha
console.log(meals[0],",", meals[4]);

// 3. Uloha
meals.push("Chicken Alfredo");
console.log(meals);

// 4.Uloha
meals.shift(meals[0]);
console.log(meals);

// 5.Uloha
console.log(meals.length);

// 6.Uloha
let i = 0
while (i < meals.length) {
    console.log(meals[i]);
    i++
}