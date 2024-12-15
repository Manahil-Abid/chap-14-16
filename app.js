/* ARRAYS */
/* Assignment chap 14 - 16 */

/* 1. Declare an empty array using JS literal notation to store 
student names in future. */

let student = [];

/* ------------------------------------------------------------*/

/* 2. Declare an empty array using JS object notation to store 
student names in future. */

let studentNames = new Array();

/*------------------------------------------------------------*/

/*3. Declare and initialize a strings array. */


let stringsArray = ["Apple", "Banana", "Cherry"];
console.log(stringsArray);

/*=============================================================*/

/*4.  Declare and initialize a numbers array. */


let numArray = [ 1 , 2 , 3 , 4 ,5 ];
console.log(numArray);

/*--------------------------------------------------------------*/

/*5.  Declare and initialize a boolean array. */

let booleanArray = [true, false];
console.log(booleanArray);

/*-------------------------------------------------------------*/

let mixedArray = ["Apple", 10, true, "Banana", 20, false];
console.log(mixedArray);

/*--------------------------------------------------------------*/

/* 7. Declare and Initialize an array and store available 
education qualifications in Pakistan (e.g. SSC, HSC, BCS, 
BS, BCOM, MS, M. Phil., PhD). Show the listed 
qualifications in your browser like:  */

let eduQualification = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "PhD"];

document.write("Education Qualifications: <br>");
for (let i = 0; i < eduQualification.length; i++) {
  document.write(eduQualification[i] + "<br>");
}

/*--------------------------------------------------------------------------------------*/

/*8. Write a program to store 3 student names in an array.Take 
another array to store score of these three students. 
Assume that total marks are 500 for each student, display 
the scores & percentages of students like:  */

let studentName = ["Micheal", "John", "Tony"];
let studentScore = [320, 230, 480];
let totalMarks = 500;

for (let i = 0; i < studentName.length; i++) {
  let percentage = (studentScore[i] / totalMarks) * 100;
  console.log(studentName[i]," score is", studentScore[i], "and percentage is" ,percentage);
}
/*--------------------------------------------------------------------------------------*/
/*9. Initialize an array with color names. Display the array 
elements in your browser. 
a. Ask the user what color he/she wants to add to the 
beginning & add that color to the beginning of the array. 
Display the updated array in your browser. 
b. Ask the user what color he/she wants to add to the end 
& add that color to the end of the array. Display the 
updated array in your browser. 
c. Add two more color to the beginning of the array. 
Display the updated array in your browser. 
d. Delete the first color in the array. Display the updated 
array in your browser. 
e. Delete the last color in the array. Display the updated 
array in your browser. 
f. Ask the user at which index he/she wants to add a color 
& color name. Then add the color to desired 
position/index. . Display the updated array in your 
browser. 
g. Ask the user at which index he/she wants to delete 
color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined 
position/index. . Display the updated array in your 
browser.  */


// let colors = ["Red", "Green", "Blue"];
// document.write("Initial Colors: " + colors + "<br>");

// let startColor = prompt("Enter a color to add at the beginning:");
// colors.unshift(startColor);
// document.write("Colors after adding at the beginning: " + colors + "<br>");

// let endColor = prompt("Enter a color to add at the end:");
// colors.push(endColor);
// document.write("Colors after adding at the end: " + colors + "<br>");

// colors.unshift("Yellow", "Orange");
// document.write("Colors after adding two more at the beginning: " + colors + "<br>");

// colors.shift();
// document.write("Colors after deleting the first color: " + colors + "<br>");

// colors.pop();
// document.write("Colors after deleting the last color: " + colors + "<br>");

// let indexColor = parseInt(prompt("Enter the index to add a color:"));
// let colorAdd = prompt("Enter the color to add:");
// colors.splice(indexColor, 0, colorAdd);
// document.write("Colors after adding a color at the specified index: " + colors + "<br>");

// let DeleteColor = parseInt(prompt("Enter the index to delete colors:"));
// let numDelete = parseInt(prompt("Enter the number of colors to delete:"));
// colors.splice(DeleteColor, numbDelete);
// document.write("Colors after deleting colors at the specified index: " + colors + "<br>");

/*--------------------------------------------------------------------------------------*/ 

// // Store student scores in an array
// let studentScores = [320, 230, 480, 120];

// // Display the original array
// console.log("Original Scores: " + studentScores);

// // Sort the array in ascending order using Array's sort method
// studentScores.sort((a, b) => a - b);

// // Display the sorted array
// console.log("Sorted Scores: " + studentScores);

/*=---------------------------------------------------------------------------------------*/
/*11. Write a program to initialize an array with city names. 
Copy 3 array elements from cities array to selectedCities 
array. */

// cities = ["khi","lhr","Isl","quetta"];
// selectedCities = [];
// selectedCities.push(cities[0], cities[1], cities[2]);
// console.log("Selected Cities: " + selectedCities);

/*-------------------------------------------------------------------------------------*/

/*12.  Write a program to create a single string from the 
below mentioned array: 
var arr = [“This ”, “ is ”, “ my ”, “ cat”]; 
(Use array’s join method)*/


// let arr = ["This ", " is ", " my ", " cat"];
// let sentence = arr.join("");
// console.log(sentence);

/*------------------------------------------------------------------------------------*/

/* 3. Create a new array. Store values one by one in such a way 
that you can access the values in the order in which they 
were stored. (FIFO-First In First Out) */

/*3. Create a new array. Store values one by one in such a way 
that you can access the values in the order in which they 
were stored. (FIFO-First In First Out)*/


// let array = [];
// array.push("Keyboard");
// array.push("Mouse");
// array.push("Printer");
// array.push("Monitor");

// console.log("Array: " + array);
// for (let i = 0; i < array.length; i++) {
//   console.log("Value " + (i + 1) + ": " + array[i]);
// }
/*--------------------------------------------------------------------------------------*/

/*15. Write a program to store phone manufacturers (Apple, 
Samsung, Motorola, Nokia, Sony & Haier) in an array. 
Display the following dropdown/select menu in your 
browser using document.write() method: */

let phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write("<select>");
document.write("<option>Select a phone manufacturer</option>");
for (let i = 0; i < phoneManufacturers.length; i++) {
  document.write("<option>" + phoneManufacturers[i] + "</option>");
}
document.write("</select>");
