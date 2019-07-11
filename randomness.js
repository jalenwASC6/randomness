//////////////////////
// GLOBAL VARIABLES //
//////////////////////
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const foods = [
    "pizza",
    "burgers",
    "rice and beans",
    "lasagna",
    "macaroni and cheese",
    "baked potatoes"
];
const students = [
    "Bob",
    "Martin",
    "Danny",
    "Mahdi",
    "Harry",
    "Sean",
    "Robert"
];
/////////////////////////////
// END OF GLOBAL VARIABLES //
/////////////////////////////

function randomNumber() {
console.log(Math.random() * 21 + 1);
}
randomNumber()

function randomLetter() {
console.log(alphabet[Math.floor(Math.random()*alphabet.length)]);
}
randomLetter()

function randomFoods() {
console.log(foods[Math.floor(Math.random()*foods.length)]);
}
randomFoods()

function randomStudent() {
console.log(students[Math.floor(Math.random()*students.length)]);
}
randomStudent()