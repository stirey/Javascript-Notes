// CHALLENGE 1
// Who's name is longer?
/* BRONZE
Write two variables. One will store your name and another will store a friend's name. Find out what property you can use to check how long the names are. Console log how many letters are in each name.
 */
/* SILVER
Expand on what you have already done and write a conditional to see who has the longer name. Using string interpolation console log who's name is longer. 
Example Result: My name is longer than Adam's.
*/
/* GOLD
In the console log include how many letters difference there are between the names.
Example Result: Adam's name is shorter than mine by 4 letters.
There is also one additional case that should be handled that has not been mentioned so far. See if you can add that to your conditional!
*/

//Bronze
let name1 = "Aaron";
let name2 = "Sarah";
console.log(name1.length);
console.log(name2.length);

//Silver
if (name1.length > name2.length) {
    console.log(name1 + " is longer than " + name2);
} 
else if (name2.length > name1.length) {
    console.log(name1 + " is longer than " + name1);
} 
else if (name2.length === name1.length) {
    console.log("Both names are the same length");
}

//Gold
let name1 = "AaronU";
let name2 = "Sarah";
console.log(name1.length);
console.log(name2.length);


if (name1.length > name2.length) {
    console.log(name1 + " is longer than " + name2);
    console.log(name1 + "is" + (name1.length.toString ()-name2.length)+ "characters longer")
} 

else if (name2.length > name1.length) {
    console.log(name1 + " is longer than " + name1);
} 
else if (name2.length === name1.length) {
    console.log("Both names are the same length");
}

//Zachs example

let myName = "Zachary";
let friend = "Isaiah";

if (myName.length > friend.length) { 
    let letters = myName.length - friend.length;
}


/* SILVER (Mine and Aarons work)
Write a conditional that checks the type of one of the values stored in the object 
and console logs the data type. If the value is not a string, number, boolean, or object console log 'What are you?!'
*/
let myObject = {
    string: 'string',
    number: 4,
    boolean: true,
    obj: {
        key: 'sample'
    }
}

let value = myObject.obj.key;

if (typeof value === 'string') {
    console.log('this value is a string');
} else if (typeof value === 'number'){
    console.log('this value is a number');
} else if (typeof value === 'boolean');{
    console.log('this value is a boolean');
} else if (typeof value === 'object');{
    console.log('this value is an object');
}

// CHALLENGE 2
// Types Challenge
/* BRONZE
Create an Object that contains a string, number, boolean, and object.
Console.log the type of one of the values in the object.
*/

let pizza = {
    //string
    toppings: "cheese",
    //number
    numberOfToppings: 1,
    //boolean
    inStock: true,
    //objects
    ingredients:{
        crust: "thin",
        sauce: "tomato",
        cheese: "mozzarella"
    }
}
console.log(typeof pizza.inStock);

 */
/* SILVER (Mine and Aarons work)
Write a conditional that checks the type of one of the values stored in the object 
and console logs the data type. If the value is not a string, number, boolean, or object console log 'What are you?!'
*/


// Types Challenge
/* BRONZE
Create an Object that contains a string, number, boolean, and object.
Console.log the type of one of the values in the object.
*/

let myObject = {
    string: 'string',
    number: 4,
    boolean: true,
    obj: {
        key: 'sample'
    }
}

console.log(typeof myObject.obj);

//always grab the outermost layer FIRST before you grab the other values. The outermost in this exampleis myObject



