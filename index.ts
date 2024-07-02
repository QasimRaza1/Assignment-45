// Question 1
console.log("Node.js , Typescript and VS code are installed on thos computer");

// Question 2


let Name: string = "Eric";

// Print a message to that person
console.log(`Hello ${Name}, would you like to learn some TypeScript today?`);

// Question 3

let Name1: string = "eric smith";

// Print the name in lowercase
console.log(Name1.toLowerCase());

// Print the name in uppercase
console.log(Name1.toUpperCase());

// Print the name in titlecase (for multiple words)
let titleCaseName = Name1.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
console.log(titleCaseName);


// Question 4

// Store the quote and the author in variables
let author: string = "Albert Einstein";
let quote: string = "A person who never made a mistake never tried anything new.";

// Print the quote and the author in the desired format
console.log(`${author} once said, “${quote}”`);

// Question 5

// Store the famous person's name in a variable
let famous_person: string = "Albert Einstein";

// Store the quote in a variable
let quote1: string = "A person who never made a mistake never tried anything new.";

// Compose the message
let message: string = `${famous_person} once said, “${quote1}”`;

// Print the message
console.log(message);

// Question 6

// Store the person's name with whitespace characters
let nameWithWhitespace: string = "\t Qasim Raza \n";

// Print the name with whitespace
console.log(`Name with whitespace: "${nameWithWhitespace}"`);

// Strip the whitespace from the beginning and end of the name
let strippedName: string = nameWithWhitespace.trim();

// Print the name after stripping the whitespace
console.log(`Name after stripping whitespace: "${strippedName}"`);


// Question 7

// Addition operation
let additionResult: number = 5 + 3;
console.log(`5 + 3 = ${additionResult}`);

// Subtraction operation
let subtractionResult: number = 10 - 2;
console.log(`10 - 2 = ${subtractionResult}`);

// Multiplication operation
let multiplicationResult: number = 4 * 2;
console.log(`4 * 2 = ${multiplicationResult}`);

// Division operation
let divisionResult: number = 64 / 8;
console.log(`64 / 8 = ${divisionResult}`);


// Question 8

console.log(4 + 4);
console.log(10 - 2);
console.log(2 * 4);
console.log(16 / 2);


// Question 9

// Store your favorite number in a variable
let favoriteNumber: number = 7;


let message1: string = `My favorite number is ${favoriteNumber}.`;


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


//console.log(message);
//This program stores the author's favorite number in a variable and prints a message revealing that number.

// Question 11

// Store the names of friends in an array
let names: string[] = ["Qasim", "Raza", "Aishhh", "Ashu"];

// Print each person's name by accessing each element in the list
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

// Question 12

// Store the names of friends in an array
let names1: string[] = ["Qasim", "Raza", "Aishhh", "Ashu"];

// Print a personalized message to each person
for (let i = 0; i < names1.length; i++) {
    console.log(`Hello ${names1[i]}, have a great day!`);
}

// Question 13

// Define an array of favorite motorcycles
let motorcycles: string[] = ["Honda", "Yamaha", "Kawasaki", "Ducati"];

// Print statements about each motorcycle
for (let i = 0; i < motorcycles.length; i++) {
    console.log(`I would like to own a ${motorcycles[i]} motorcycle.`);
}


// Question 14

// Define an array of guests to invite to dinner
let guests: string[] = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci"];

// Print invitations to each guest
for (let i = 0; i < guests.length; i++) {
    console.log(`Dear ${guests[i]}, you are cordially invited to dinner. Please join us for an evening of stimulating conversation.`);
}


// Question 15

// Define an array of guests to invite to dinner
let guests1: string[] = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci"];

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
let newGuest: string = "Nikola Tesla";
guests.push(newGuest);

// Print the updated invitations
console.log("\nUpdated invitations:");
for (let i = 0; i < guests1.length; i++) {
    console.log(`Dear ${guests1[i]}, you are cordially invited to dinner. Please join us for an evening of stimulating conversation.`);
}


// Question 16

// Define an array of guests to invite to dinner
let guests2: string[] = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci"];

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

// array of guests to invite to dinner
let guests3: string[] = ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Marie Curie", "Leonardo da Vinci", "Nikola Tesla"];

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
console.log("\nRemaining guests:", guests3 );


// Question 18

// Define an array of places to visit
let placesToVisit: string[] = ["Paris", "Tokyo", "Rome", "New York", "Sydney"];

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
let guests4: string[] = ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Marie Curie", "Leonardo da Vinci", "Nikola Tesla"];

// Print the original invitations
console.log("Original invitations:");
for (let i = 0; i < guests4.length; i++) {
    console.log(`Dear ${guests4[i]}, you are cordially invited to dinner. Please join us for an evening of stimulating conversation.`);
}

// Print the number of people invited to dinner
console.log(`\nNumber of people invited to dinner: ${guests4.length}`);


// Question 20

// Define an array of programming languages
let programmingLanguages: string[] = ["JavaScript","Python","Java","C++","TypeScript","Swift","Ruby","Go","PHP","Kotlin"];

console.log("List of Programming Languages:" , programmingLanguages);


// Question 21

// Define objects representing information about countries
let countries = [
    {
        Name1: "United States",
        capital1: "Washington, D.C.",
        population1: 331449281,
        landmark1: "Statue of Liberty"
    },
    {
        Name1: "France",
        capital1: "Paris",
        population1: 65273511,
        landmark1: "Eiffel Tower"
    },
    {
        Name1: "Japan",
        capital1: "Tokyo",
        population1: 125584838,
        landmark1: "Mount Fuji"
    }
];

// Print information about each country
console.log("Information about Countries:");
for (let country of countries) {
    console.log(`Country: ${country.Name1}`);
    console.log(`Capital: ${country.capital1}`);
    console.log(`Population: ${country.population1}`);
    console.log(`Notable Landmark: ${country.landmark1}`);
    console.log(); 
}


// Question 22

// Define objects representing information about countries
let countries1 = [
    {
        Name1: "United States",
        capital1: "Washington, D.C.",
        population1: 331449281,
        landmark1: "Statue of Liberty"
    },
    {
        Name1: "France",
        capital1: "Paris",
        population1: 65273511,
        landmark1: "Eiffel Tower"
    },
    {
        Name1: "Japan",
        capital1: "Tokyo",
        population1: 125584838,
        landmark1: "Mount Fuji"
    }
];

// Access an index that doesn't exist (intentional error)
let index1 = 3; // Trying to access the fourth element, which doesn't exist

// Correcting the error by checking the array length before accessing
if (index1 >= 0 && index1 < countries1.length) {
    console.log(`Country1 : ${countries1[index1].Name1}`);
} else {
    console.log(`Invalid index: ${index1}. Please choose a valid index.`);
}



// Question 23
let car: string = 'subaru';
let country: string = 'Japan';
let age: number = 25;
let isStudent: boolean = true ;
let isStudent1 : boolean = false ;
let languages: string[] = ['English', 'Japanese', 'Spanish'];
let population: number = 125584838;

// Test 1: True
console.log("Is car == 'subaru'? I predict True.");
console.log(car === 'subaru'); // True

// Test 2: False
console.log("Is car == 'Toyota'? I predict False.");
console.log(car === 'Toyota'); // False

// Test 3: True
console.log("Is country == 'Japan'? I predict True.");
console.log(country === 'Japan'); // True

// Test 4: False
console.log("Is country == 'France'? I predict False.");
console.log(country === 'France'); // False

// Test 5: True
console.log("Is age > 20? I predict True.");
console.log(age > 20); // True

// Test 6: False
console.log("Is age < 20? I predict False.");
console.log(age < 20); // False

// Test 7: True
console.log("Is isStudent === true? I predict True.");
console.log(isStudent === true); // True

// Test 8: False (Alternative approach to avoid TypeScript error)
console.log("Is isStudent === false? I predict False.");
console.log(isStudent1 === false); // False

// Test 9: True
console.log("Is 'Japanese' in languages? I predict True.");
console.log(languages.includes('Japanese')); // True

// Test 10: False
console.log("Is population < 1000000? I predict False.");
console.log(population < 1000000); // False


// Question 24

let car2: string = 'subaru';
let country2: string = 'Japan';
let age2 : number = 25;
let isStudent2 : boolean = true;
let isStudent3 : boolean = false;
let languages2 : string[] = ['English', 'Japanese', 'Spanish'];
let population2 : number = 125584838;

// Initial Tests

// Test 1: True
console.log("Is car == 'subaru'? I predict True.");
console.log(car2 === 'subaru'); // True

// Test 2: False
console.log("Is car == 'Toyota'? I predict False.");
console.log(car2 === 'Toyota'); // False

// Test 3: True
console.log("Is country == 'Japan'? I predict True.");
console.log(country2 === 'Japan'); // True

// Test 4: False
console.log("Is country == 'France'? I predict False.");
console.log(country2 === 'France'); // False

// Test 5: True
console.log("Is age > 20? I predict True.");
console.log(age2 > 20); // True

// Test 6: False
console.log("Is age < 20? I predict False.");
console.log(age2 < 20); // False

// Test 7: True
console.log("Is isStudent === true? I predict True.");
console.log(isStudent2 === true); // True

// Test 8: False
console.log("Is isStudent === false? I predict False.");
console.log(isStudent3 === false); // False

// Test 9: True
console.log("Is 'Japanese' in languages? I predict True.");
console.log(languages2.includes('Japanese')); // True

// Test 10: False
console.log("Is population < 1000000? I predict False.");
console.log(population2 < 1000000); // False

// Additional Tests

// Equality and Inequality with Strings
let fruit: string = 'apple';
let color: string = 'red';

// True
console.log("Is fruit == 'apple'? I predict True.");
console.log(fruit === 'apple'); // True

// False
console.log("Is fruit != 'apple'? I predict False.");
console.log(fruit !== 'apple'); // False

// True
console.log("Is color == 'red'? I predict True.");
console.log(color === 'red'); // True

// False
console.log("Is color == 'blue'? I predict False.");
console.log(color === 'blue'); // False

// Tests using the lower case function
let city1: string = 'New York';

// True
console.log("Is city.toLowerCase() == 'new york'? I predict True.");
console.log(city1.toLowerCase() === 'new york'); // True

// False
console.log("Is city.toLowerCase() == 'Los Angeles'? I predict False.");
console.log(city1.toLowerCase() === 'los angeles'); // False

// Numerical Tests
let number1: number = 10;
let number2: number = 20;

// True
console.log("Is number1 == 10? I predict True.");
console.log(number1 === 10); // True

// False
console.log("Is number1 != 10? I predict False.");
console.log(number1 !== 10); // False

// True
console.log("Is number2 > number1? I predict True.");
console.log(number2 > number1); // True

// False
console.log("Is number1 > number2? I predict False.");
console.log(number1 > number2); // False

// True
console.log("Is number2 >= 20? I predict True.");
console.log(number2 >= 20); // True

// False
console.log("Is number1 >= number2? I predict False.");
console.log(number1 >= number2); // False

// True
console.log("Is number1 <= 10? I predict True.");
console.log(number1 <= 10); // True

// False
console.log("Is number2 <= 10? I predict False.");
console.log(number2 <= 10); // False

// Tests using "and" and "or" operators
let isSunny: boolean = true;
let isWeekend: boolean = false;

// True
console.log("Is isSunny and !isWeekend? I predict True.");
console.log(isSunny && !isWeekend); // True

// False
console.log("Is isSunny and isWeekend? I predict False.");
console.log(isSunny && isWeekend); // False

// True
console.log("Is isSunny or isWeekend? I predict True.");
console.log(isSunny || isWeekend); // True

// False
console.log("Is !isSunny or isWeekend? I predict False.");
console.log(!isSunny || isWeekend); // False

// Test whether an item is in an array
let fruits: string[] = ['apple', 'banana', 'cherry'];

// True
console.log("Is 'banana' in fruits? I predict True.");
console.log(fruits.includes('banana')); // True

// False
console.log("Is 'grape' in fruits? I predict False.");
console.log(fruits.includes('grape')); // False

// Test whether an item is not in an array
// True
console.log("Is 'grape' not in fruits? I predict True.");
console.log(!fruits.includes('grape')); // True

// False
console.log("Is 'apple' not in fruits? I predict False.");
console.log(!fruits.includes('apple')); // False


// Question 25
let alien_color = 'green';

if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}
let alien_color1 = 'red';

if (alien_color1 === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}



// Question 26
let alien_color2 = 'green';

if (alien_color2 === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
} else {
    console.log("Congratulations! You just earned 10 points.");
}

let alien_color3 = 'red';

if (alien_color3 === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
} else {
    console.log("Congratulations! You just earned 10 points.");
}

// Question 27
let alien_color4 = 'green';

if (alien_color4 === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
} else if (alien_color4 === 'yellow') {
    console.log("Congratulations! You just earned 10 points for shooting the yellow alien.");
} else if (alien_color4 === 'red') {
    console.log("Congratulations! You just earned 15 points for shooting the red alien.");
}
let alien_color5 = 'yellow';

if (alien_color5 === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
} else if (alien_color5 === 'yellow') {
    console.log("Congratulations! You just earned 10 points for shooting the yellow alien.");
} else if (alien_color5 === 'red') {
    console.log("Congratulations! You just earned 15 points for shooting the red alien.");
}
let alien_color6 = 'red';

if (alien_color6 === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
} else if (alien_color6 === 'yellow') {
    console.log("Congratulations! You just earned 10 points for shooting the yellow alien.");
} else if (alien_color6 === 'red') {
    console.log("Congratulations! You just earned 15 points for shooting the red alien.");
}

// Question 28
let age3 = 25;

if (age3 < 2) {
    console.log("The person is a baby.");
} else if (age3 >= 2 && age3 < 4) {
    console.log("The person is a toddler.");
} else if (age3 >= 4 && age3 < 13) {
    console.log("The person is a kid.");
} else if (age3 >= 13 && age3 < 20) {
    console.log("The person is a teenager.");
} else if (age3 >= 20 && age3 < 65) {
    console.log("The person is an adult.");
} else {
    console.log("The person is an elder.");
}

// Question 29
let favorite_fruits = ['apple', 'banana', 'strawberry'];

if (favorite_fruits.includes('apple')) {
    console.log("You really like apples!");
}

if (favorite_fruits.includes('banana')) {
    console.log("You really like bananas!");
}

if (favorite_fruits.includes('strawberry')) {
    console.log("You really like strawberries!");
}

if (favorite_fruits.includes('orange')) {
    console.log("You really like oranges!");
} else {
    console.log("You don't like oranges.");
}

if (favorite_fruits.includes('grape')) {
    console.log("You really like grapes!");
} else {
    console.log("You don't like grapes.");
}

// Question 30
let usernames = ['alice', 'bob', 'admin', 'charlie', 'diana'];

for (let i = 0; i < usernames.length; i++) {
    if (usernames[i] === 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${usernames[i]}, thank you for logging in again.`);
    }
}

// Question 31
let usernames1: string | any[] = []; // Empty array

if (usernames1.length === 0) {
    console.log("We need to find some users!");
} else {
    for (let i = 0; i < usernames1.length; i++) {
        if (usernames1[i] === 'admin') {
            console.log("Hello admin, would you like to see a status report?");
        } else {
            console.log(`Hello ${usernames1[i]}, thank you for logging in again.`);
        }
    }
}

// Question 32
let current_users = ['alice', 'bob', 'charlie', 'diana', 'emily'];
let new_users = ['bob', 'frank', 'alice', 'grace', 'hannah'];

for (let i = 0; i < new_users.length; i++) {
    let newUserExists = false;
    for (let j = 0; j < current_users.length; j++) {
        if (new_users[i].toLowerCase() === current_users[j].toLowerCase()) {
            newUserExists = true;
            break;
        }
    }
    if (newUserExists) {
        console.log(`Sorry, ${new_users[i]} is not available. Please enter a new username.`);
    } else {
        console.log(`${new_users[i]} is available.`);
    }
}

// Question 33
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    let ordinal;

    if (number === 1) {
        ordinal = "1st";
    } else if (number === 2) {
        ordinal = "2nd";
    } else if (number === 3) {
        ordinal = "3rd";
    } else {
        ordinal = number + "th";
    }

    console.log(ordinal);
}

// Question 34
let favoritePizzas = ['Pepperoni', 'Margherita', 'Supreme'];

// Printing each pizza name using a for loop
console.log("Printing pizza names:");
for (let i = 0; i < favoritePizzas.length; i++) {
    console.log(favoritePizzas[i]);
}

// Printing a sentence about each pizza
console.log("\nPrinting sentences about each pizza:");
for (let i = 0; i < favoritePizzas.length; i++) {
    console.log(`I like ${favoritePizzas[i]} pizza.`);
}

// Additional statement about loving pizza
console.log("\nI really love pizza!");

// Question 35
let animals = ['dog', 'cat', 'rabbit'];

// Printing each animal name using a for loop
console.log("Printing animal names:");
for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}

// Printing a statement about each animal
console.log("\nPrinting statements about each animal:");
for (let i = 0; i < animals.length; i++) {
    console.log(`A ${animals[i]} would make a great pet.`);
}

// Statement about their common characteristic
console.log("\nAny of these animals would make a great pet!");


// Question 36
function make_shirt(size: string, message: string) {
    console.log(`The shirt size is ${size} and it should have the message: "${message}".`);
}


make_shirt('Large', 'Hello, World!');

// Question 37
function make_shirt1(size1 = 'Large', message1 = 'I love TypeScript') {
    console.log(`The shirt size is ${size1} and it should have the message: "${message1}".`);
}

// Making a large shirt with the default message
make_shirt1();

// Making a medium shirt with the default message
make_shirt1('Medium');

// Making a shirt of any size with a different message
make_shirt1('Small', 'Hello, JavaScript!');

// Question 38
function describe_city(city3: string, country3 = 'Unknown') {
    console.log(`${city3} is in ${country3}.`);
}

// Calling the function for three different cities
describe_city('Karachi', 'Pakistan');
describe_city('New York', 'USA');
describe_city('Tokyo'); // Using default country ('Unknown')

// Question 39
function city_country(city4: string, country4: string) {
    return `${city4}, ${country4}`;
}

// Calling the function with three different city-country pairs
console.log(city_country('Lahore', 'Pakistan'));
console.log(city_country('Paris', 'France'));
console.log(city_country('Sydney', 'Australia'));

// Question 40
// Define the type for the album object
interface Album {
    artist: string;
    title: string;
    tracks?: number;
}

// Define the make_album function
function make_album(artist: string, title: string, tracks?: number): Album {
    const album: Album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}

// Create three albums
const album1 = make_album("The Beatles", "Abbey Road");
const album2 = make_album("Pink Floyd", "The Dark Side of the Moon");
const album3 = make_album("Nirvana", "Nevermind");

// Print the albums
console.log(album1);
console.log(album2);
console.log(album3);

// Create an album with the number of tracks
const albumWithTracks = make_album("Daft Punk", "Random Access Memories", 13);

// Print the album with the number of tracks
console.log(albumWithTracks);


// Question 41
// Step 1: Create an array of magician's names
const magicians: string[] = ["Qasim", "Raza", "Ayesha", "Aishh", "Shudain"];

// Step 2: Define the show_magicians() function
function show_magicians(magiciansArray: string[]): void {
    magiciansArray.forEach(magician => {
        console.log(magician);
    });
}

// Step 3: Call the function and pass the array to it
show_magicians(magicians);

// Question 42
// Step 1: Create an array of magician's names
const magicians1: string[] = ["Qasim", "Raza", "Ayesha", "Aishh", "Shudain"];

// Step 2: Define the show_magicians() function
function show_magicians1(magiciansArray: string[]): void {
    magiciansArray.forEach(magician => {
        console.log(magician);
    });
}

// Step 3: Define the make_great() function
function make_great(magiciansArray: string[]): string[] {
    return magiciansArray.map(magician => `the Great ${magician}`);
}

// Step 4: Modify the magicians array by adding "the Great" to each magician's name
const greatMagicians = make_great(magicians1);

// Step 5: Show the modified list of magicians
show_magicians(greatMagicians);

// Question 43
// Step 1: Create an array of magician's names
const magicians2: string[] = ["Qasim", "Raza", "Ayesha", "Aishh", "Shudain"];

// Step 2: Define the show_magicians() function
function show_magicians2 (magiciansArray1: string[]): void {
    magiciansArray1.forEach(magician1 => {
        console.log(magician1);
    });
}

// Step 3: Define the make_great() function
function make_great1(magiciansArray1: string[]): string[] {
    return magiciansArray1.map(magician1 => `the Great ${magician1}`);
}

// Step 4: Make a copy of the original magicians array
const originalMagicians = [...magicians2];

// Step 5: Modify the copy by adding "the Great" to each magician's name
const greatMagicians1 = make_great(originalMagicians);

// Step 6: Show the original list of magicians
console.log("Original Magicians:");
show_magicians(originalMagicians);

// Step 7: Show the modified list of magicians with "the Great" added
console.log("\nGreat Magicians:");
show_magicians(greatMagicians);

// Question 44
// Define the make_sandwich function
function make_sandwich(...items: string[]): void {
    console.log("Making a sandwich with the following items:");
    items.forEach(item => {
        console.log("- " + item);
    });
    console.log("Sandwich complete!\n");
}

// Call the function three times with different numbers of arguments
make_sandwich("Ham", "Cheese", "Lettuce");
make_sandwich("Turkey", "Swiss cheese");
make_sandwich("Peanut butter", "Jelly");

// Question 45
// Define the type for the car object
interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any; // Allow additional properties
}

// Define the function to store car information
function store_car(manufacturer: string, model: string, ...args: [string, any][]): Car {
    let car: Car = {
        manufacturer: manufacturer,
        model: model
    };

    // Process additional arguments (key-value pairs)
    args.forEach(([key, value]) => {
        car[key] = value;
    });

    return car;
}

// Call the function with required information and additional properties
const myCar = store_car("Toyota", "Camry", ["color", "blue"], ["year", 2022]);

// Print the car object to verify all information was stored correctly
console.log(myCar);
