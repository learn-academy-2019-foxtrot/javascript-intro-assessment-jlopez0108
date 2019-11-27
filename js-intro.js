
// ASSESSMENT 1: INTRO TO JAVASCRIPT
// Coding practical questions

// --------------------------- Consider the following variable:

var mantra = "Be the dev"

// 1a. Write the code that determines if there is a 'B' in mantra.


console.log(mantra.includes("B"))


// 1b. Write the code that determines if there is an 'x' in mantra.

console.log(mantra.includes("x"))

// 1c. Write the code that determines if there is a 'v' in mantra.

console.log(mantra.includes("v"))


// 1d. STRETCH: Write a function that can take two arguments - a string and a letter and returns a sentence telling the user if the letter exists within the string.
const exists = (x, y) =>{
    let str = "sentence"
    let letter = "e"
    if (str.includes("e")){
        return true
    }else{
        return false
    }
}

console.log(exists())
// ------------------------------ Consider the following variables:

var myDog = "Snoopy"
var myCat = "Garfield"

// 2a. Create a function that returns the longer of the two variables. Expected output: "Garfield"

var longerVar = () =>{
if (myDog.length > myCat.length){
    return "Snoopy"
} else{
    return "Garfield"}
}

console.log(longerVar())
// 2b. Create a function that takes in two arguments and returns an array containing the two variables. Expected output: ["Snoopy", "Garfield"]

// var myDog = "Snoopy"
// var myCat = "Garfield"

var twoVars = (myDog, myCat) => {
    return [myDog, myCat]
}
console.log(twoVars(myDog, myCat))


// 2c. STRETCH: Write a function that accepts two variables and returns a string in all lowercase letters. Expected output: "snoopy garfield"




// ------------------------------ Consider the following variable:

var myMessage = "Learning is fun!"

// 3a. Write the code that logs each letter of the message using a for loop.
//hint: "logs" in this case means "prints to the terminal console."  This is typically done with a console.log(x), where x is the string, function, etc that you wish to see in the terminal.
const learning = (string) => {
    let newStr = myMessage
    for(let i=0; i < string.length; i++){
 }
 return newStr
}
console.log(learning(myMessage))

// 3b. Write the code that logs each letter of the message using map.
var myArr = [myMessage]

const learn = () => { 
    let newArr  = myArr.map(value => value = myArr.toString())
    return newArr
}

console.log(learn(myArr))


// 3c. STRETCH: Write the code that logs each letter of the message using a while loop.



// 3d. SUPER STRETCH: Write the code that logs each letter of the message using forEach().




// ---------------------------- Consider the following variable:

var testString = "thisisateststring"

// 4a. Write a function that takes the variable as an argument and returns the string without vowels. Expected output: "thsstststrng"

var newTestString = testString.split("")

const vow = (array) =>{
    return array.filter(value => "aeiou".includes(value.toLowerCase()) === false).join("")
}

console.log(vow(newTestString))


// 4b. STRETCH: Update your function to return an error message if the variable is not a string. Copy and paste your function to add these changes.






// ------------------------------- Consider the following variable:

var toonimals = [ {name: "Itchy", animal: "mouse"}, {name: "Stimpy", animal: "cat"}, {name: "Daffy", animal: "duck"}, {name: "Scratchy", animal: "cat"}, {name: "Ren", animal: "dog"}, {name: "Felix", animal: "cat"}]

// 5a. Write a function that takes in the toonimals array as an argument and returns an array with only the toon objects that are cats. Expected output: [ { name: "Stimpy", animal: "cat" }, { name: "Scratchy", animal: "cat" }, { name: "Felix", animal: "cat" } ]

var onlyCats = toonimals.filter(value => value.animal === "cat")
console.log(onlyCats)



//5b. Write a function that returns only the names of all the non-cats. Expected output: "Itchy" "Daffy" "Ren"

var noCats = toonimals.filter(value => value.animal !== "cat").map((value) => value.name)
console.log(noCats)


//5c. STRETCH: Create a function that will print a sentence for every toon stating their name and their animal type. Use string interpolation. Expected output: "Itchy is a mouse" "Stimpy is a cat" "Daffy is a duck" "Scratchy is a cat" "Ren is a dog" "Felix is a cat"
