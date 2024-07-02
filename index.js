"use strict";
// Question 1
console.log("Node.js , Typescript and VS code are installed on thos computer");
// Question 2
// Store the person's name in a variable
let Name = "Eric";
// Print a message to that person
console.log(`Hello ${Name}, would you like to learn some TypeScript today?`);
// Question 3
// Store the person's name in a variable
let Name1 = "eric smith";
// Print the name in lowercase
console.log(Name1.toLowerCase());
// Print the name in uppercase
console.log(Name1.toUpperCase());
// Print the name in titlecase (for multiple words)
let titleCaseName = Name1.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
console.log(titleCaseName);
// Question 4
// Store the quote and the author in variables
let author = "Albert Einstein";
let quote = "A person who never made a mistake never tried anything new.";
// Print the quote and the author in the desired format
console.log(`${author} once said, “${quote}”`);
// Question 5
// Store the famous person's name in a variable
let famous_person = "Albert Einstein";
// Store the quote in a variable
let quote1 = "A person who never made a mistake never tried anything new.";
// Compose the message
let message = `${famous_person} once said, “${quote1}”`;
// Print the message
console.log(message);
// Question 6
// Store the person's name with whitespace characters
let nameWithWhitespace = "\t Qasim Raza \n";
// Print the name with whitespace
console.log(`Name with whitespace: "${nameWithWhitespace}"`);
// Strip the whitespace from the beginning and end of the name
let strippedName = nameWithWhitespace.trim();
// Print the name after stripping the whitespace
console.log(`Name after stripping whitespace: "${strippedName}"`);
// Question 7
// Addition operation
let additionResult = 5 + 3;
console.log(`5 + 3 = ${additionResult}`);
// Subtraction operation
let subtractionResult = 10 - 2;
console.log(`10 - 2 = ${subtractionResult}`);
// Multiplication operation
let multiplicationResult = 4 * 2;
console.log(`4 * 2 = ${multiplicationResult}`);
// Division operation
let divisionResult = 64 / 8;
console.log(`64 / 8 = ${divisionResult}`);
// Question 8
console.log(4 + 4);
console.log(10 - 2);
console.log(2 * 4);
console.log(16 / 2);
// Question 9
// Store your favorite number in a variable
let favoriteNumber = 7;
// Create a message revealing your favorite number
let message1 = `My favorite number is ${favoriteNumber}.`;
// Print the message
console.log(message1);
// Question 10
// Proogram 1
// Program written by Qasim Raza on 2024-06-20
// This program demonstrates addition, subtraction, multiplication, and division operations that each result in the number 8.
// Addition operation
//console.log(5 + 3);
// Subtraction operation
//console.log(10 - 2);
// Multiplication operation
//console.log(4 * 2);
// Division operation
//console.log(64 / 8);
// This program performs basic arithmetic operations (addition, subtraction, multiplication, division) that each result in the number 8.
// Program 2
// Program written by Qasim Raza on 2024-06-20
// This program stores and prints a message revealing the author's favorite number.
// Store your favorite number in a variable
//let favoriteNumber: number = 7;
// Create a message revealing your favorite number
//let message: string = `My favorite number is ${favoriteNumber}.`;
// Print the message
//console.log(message);
//This program stores the author's favorite number in a variable and prints a message revealing that number.
// Question 11
// Store the names of your friends in an array
let names = ["Alice", "Bob", "Charlie", "David"];
// Print each person's name by accessing each element in the list
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
// Question 12
// Store the names of your friends in an array
let names1 = ["Alice", "Bob", "Charlie", "David"];
// Print a personalized message to each person
for (let i = 0; i < names1.length; i++) {
    console.log(`Hello ${names1[i]}, have a great day!`);
}
// Question 13
// Define an array of favorite motorcycles
let motorcycles = ["Honda", "Yamaha", "Kawasaki", "Ducati"];
// Print statements about each motorcycle
for (let i = 0; i < motorcycles.length; i++) {
    console.log(`I would like to own a ${motorcycles[i]} motorcycle.`);
}
// Question 14
// Define an array of guests to invite to dinner
let guests = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci"];
// Print invitations to each guest
for (let i = 0; i < guests.length; i++) {
    console.log(`Dear ${guests[i]}, you are cordially invited to dinner. Please join us for an evening of stimulating conversation.`);
}
// Question 15
// Define an array of guests to invite to dinner
let guests1 = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci"];
// Print the original invitations
console.log("Original invitations:");
for (let i = 0; i < guests1.length; i++) {
    console.log(`Dear ${guests1[i]}, you are cordially invited to dinner. Please join us for an evening of stimulating conversation.`);
}
// Assume Leonardo da Vinci can't make it, so we need to replace him
// Remove Leonardo da Vinci from the list
let indexOfLeonardo = guests1.indexOf("Leonardo da Vinci");
if (indexOfLeonardo !== -1) {
    guests1.splice(indexOfLeonardo, 1); // Remove Leonardo da Vinci
}
// Add a new guest to the list
let newGuest = "Nikola Tesla";
guests.push(newGuest);
// Print the updated invitations
console.log("\nUpdated invitations:");
for (let i = 0; i < guests1.length; i++) {
    console.log(`Dear ${guests1[i]}, you are cordially invited to dinner. Please join us for an evening of stimulating conversation.`);
}
// Question 16
// Define an array of guests to invite to dinner
let guests2 = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci"];
// Print the original invitations
console.log("Original invitations:");
for (let i = 0; i < guests2.length; i++) {
    console.log(`Dear ${guests2[i]}, you are cordially invited to dinner. Please join us for an evening of stimulating conversation.`);
}
// Inform about the bigger dinner table
console.log("\nGreat news! We found a bigger dinner table!\n");
// Add new guests
// Add one new guest to the beginning of the array
guests2.unshift("Isaac Newton");
// Add one new guest to the middle of the array
guests2.splice(Math.floor(guests2.length / 2), 0, "Galileo Galilei");
// Add one new guest to the end of the array using push()
guests2.push("Nikola Tesla");
// Print the updated invitations
console.log("Updated invitations:");
for (let i = 0; i < guests2.length; i++) {
    console.log(`Dear ${guests2[i]}, you are cordially invited to dinner. Please join us for an evening of stimulating conversation.`);
}
// Question 17
// Define an array of guests to invite to dinner
let guests3 = ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Marie Curie", "Leonardo da Vinci", "Nikola Tesla"];
// Print the original invitations
console.log("Original invitations:");
for (let i = 0; i < guests3.length; i++) {
    console.log(`Dear ${guests3[i]}, you are cordially invited to dinner. Please join us for an evening of stimulating conversation.`);
}
// Inform about the smaller dinner table
console.log("\nUnfortunately, the new dinner table won't arrive in time, so we can only invite two people.\n");
// Remove guests until only two names remain in the list
while (guests3.length > 2) {
    let removedGuest = guests3.pop(); // Remove the last guest from the list
    console.log(`Sorry ${removedGuest}, we won't be able to invite you to dinner.`);
}
// Print invitations to the remaining two guests
console.log("\nInvitations to the remaining guests:");
for (let i = 0; i < guests3.length; i++) {
    console.log(`Dear ${guests3[i]}, you are still invited to dinner. Please join us for an evening of stimulating conversation.`);
}
// Remove the last two names from the list
guests3.pop();
guests3.pop();
// Print the empty list to confirm
console.log("\nRemaining guests:", guests3);
// Question 18
// Define an array of places to visit
let placesToVisit = ["Paris", "Tokyo", "Rome", "New York", "Sydney"];
// Print the array in its original order
console.log("Original order:");
console.log(placesToVisit);
// Print the array in alphabetical order without modifying the actual list
console.log("\nAlphabetical order:");
console.log([...placesToVisit].sort());
// Show that the array is still in its original order
console.log("\nOriginal order after alphabetical sort:");
console.log(placesToVisit);
// Print the array in reverse alphabetical order without changing the order of the original list
console.log("\nReverse alphabetical order:");
console.log([...placesToVisit].sort().reverse());
// Show that the array is still in its original order
console.log("\nOriginal order after reverse alphabetical sort:");
console.log(placesToVisit);
// Reverse the order of the list
placesToVisit.reverse();
console.log("\nReversed order:");
console.log(placesToVisit);
// Reverse the order of the list again to return to the original order
placesToVisit.reverse();
console.log("\nOriginal order after double reverse:");
console.log(placesToVisit);
// Sort the array so it's stored in alphabetical order
placesToVisit.sort();
console.log("\nSorted in alphabetical order:");
console.log(placesToVisit);
// Sort the array to change it to reverse alphabetical order
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("\nSorted in reverse alphabetical order:");
console.log(placesToVisit);
// Question 19
// Define an array of guests to invite to dinner
let guests4 = ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Marie Curie", "Leonardo da Vinci", "Nikola Tesla"];
// Print the original invitations
console.log("Original invitations:");
for (let i = 0; i < guests4.length; i++) {
    console.log(`Dear ${guests4[i]}, you are cordially invited to dinner. Please join us for an evening of stimulating conversation.`);
}
// Print the number of people invited to dinner
console.log(`\nNumber of people invited to dinner: ${guests4.length}`);
// Question 20
// Define an array of programming languages
let programmingLanguages = ["JavaScript", "Python", "Java", "C++", "TypeScript", "Swift", "Ruby", "Go", "PHP", "Kotlin"];
console.log("List of Programming Languages:", programmingLanguages);
// Question 21
// Define objects representing information about countries
let countries = [
    {
        name: "United States",
        capital: "Washington, D.C.",
        population: 331449281,
        landmark: "Statue of Liberty"
    },
    {
        name: "France",
        capital: "Paris",
        population: 65273511,
        landmark: "Eiffel Tower"
    },
    {
        name: "Japan",
        capital: "Tokyo",
        population: 125584838,
        landmark: "Mount Fuji"
    }
];
// Print information about each country
console.log("Information about Countries:");
for (let country of countries) {
    console.log(`Country: ${country.name}`);
    console.log(`Capital: ${country.capital}`);
    console.log(`Population: ${country.population}`);
    console.log(`Notable Landmark: ${country.landmark}`);
    console.log(); // Empty line for separation
}
// Question 22
// Define objects representing information about countries
let countries1 = [
    {
        name: "United States",
        capital: "Washington, D.C.",
        population: 331449281,
        landmark: "Statue of Liberty"
    },
    {
        name: "France",
        capital: "Paris",
        population: 65273511,
        landmark: "Eiffel Tower"
    },
    {
        name: "Japan",
        capital: "Tokyo",
        population: 125584838,
        landmark: "Mount Fuji"
    }
];
// Access an index that doesn't exist (intentional error)
let index1 = 3; // Trying to access the fourth element, which doesn't exist
console.log(`Country: ${countries1[index1].name}`); // This line will cause an error
// Correcting the error by checking the array length before accessing
if (index1 < countries1.length) {
    console.log(`Country: ${countries1[index1].name}`);
}
else {
    console.log(`Invalid index: ${index1}. Please choose a valid index.`);
}
/*
// Question 23



// Question 1
// Question 1
// Question 1
// Question 1
// Question 1
// Question 1
// Question 1
// Question 1
// Question 1
// Question 1
// Question 1
// Question 1
// Question 1
// Question 1
// Question 1
// Question 1
// Question 1
// Question 1
*/ 
