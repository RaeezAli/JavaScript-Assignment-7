//? Chapter No 38 - 32

//TODO Question No.01

// function power(a , b) {

//     return Math.pow(a , b);
  
// }
  
// let num1 = +prompt("Enter Any Number.");  
// let num2 = +prompt("Enter Any Number for Power.");  

// document.write("The Power of " + num1 + " is raised by " + num2 + " is " + power(num1 , num2) + ".");

//TODO Question No.02

// function leapYear(year) {

//     if((year % 4 == 0 && year % 100 != 0) || year % 400 == 0){

//         document.write(year + " is a Leap Year.");

//     }

//     else {

//         document.write(year + " is not a Leap Year.");

//     }

// }

// let year = +prompt("Enter A Year.");

// leapYear(year);

// TODO Question No.03

// function semiPerimeter(a , b , c) {

//     let s = a + b + c;
//     s = s/2;
//     return s;
// }

// function areaOfTriangle(a , b , c) {

//     let area;
//     let s = semiPerimeter(a , b , c);

//     area = s*[(s-a)*(a-b)*(s-c)];
//     return area;
// }

// let sideA = +prompt("Enter First Sides Length.");
// let sideB = +prompt("Enter Second Sides Length.");
// let sideC = +prompt("Enter Third Sides Length.");

// let area = areaOfTriangle(sideA , sideB , sideC);
// document.write("The Area Of Triangle is " + area);

// TODO Question No.04

// function percentage(a , b , c) {

//     let x , sum;
//     sum = (a + b + c)/300;
//     x = sum * 100;
//     document.write("The Percentage of Student is " + x + "%.<br>");
// }

// function average(a , b , c) {
    
//     let sum;
//     sum = (a + b + c)/3;
//     document.write("The Average of Student Subject is " + sum + ".<br>");
    
// }

// function mainFunction() {
    
//     alert("Enter Numbers Out Of 100 Marks.");

//     let subjectOne = +prompt("Enter First Subject Numbers.");
//     let subjectTwo = +prompt("Enter Second Subject Numbers.");
//     let subjectThree = +prompt("Enter Third Subject Numbers.");

//     average(subjectOne , subjectTwo , subjectThree);
//     percentage(subjectOne , subjectTwo , subjectThree);
// }

// mainFunction();

// TODO Question No.05

// function customFunction(string , char) {

//     let i = 0;

//     while (i < string.length) {

//       if (string[i].toLowerCase() === char) {

//         return i;

//       }
//       i++;

//     }
//     return -1;
// }
  
// let string = "Assalam u Alaikum";
// document.write(" String :  " + string + "<br>");
// let char = "a";
// document.write(" Character :  " + char + "<br>");

// let index = customFunction(string , char);
// document.write("The Character " + char + " is repeated " + index + " times in String.");
  
// TODO Question No.06

// function removeVowels(string) {

//     let vowels = 'AEIOUaeiou';
//     let result = '';

//     for (let i = 0; i < string.length; i++) {

//         if (vowels.indexOf(string[i]) === -1) {

//             result += string[i];
//         }

//     }

//     return result;

// }

// let string = "My Name is Ali.";
// document.write(" String : " + string + "<br>");

// document.write(removeVowels(string));

// TODO Question No.06

// function vowelsCount(text) {

//     let vowels = "aeiou";
//     let count = 0;
  
//     for (let i = 0; i < text.length - 1; i++) {

//       let char1 = text[i].toLowerCase();
//       let char2 = text[i + 1].toLowerCase();
      
//       if(vowels.includes(char1) && vowels.includes(char2)){

//         count++;
//         }

//     }
//  return count;

// }
// let text = "He is Eating Pizza.";
// let result = vowelsCount(text);
// console.log("Number of Vowel pairs are : ", result);  

// TODO Question No.08

// function meters(cityOne , distance , cityTwo) {

//     distance = distance * 1000;
//     document.write("The Distance between " + cityOne + " and " + cityTwo + " in Meter is " + distance + ".<br>");
// }

// function inches(cityOne , distance , cityTwo) {

//     distance = distance * 39370.1;
//     document.write("The Distance between " + cityOne + " and " + cityTwo + " in Inches is " + distance + ".<br>");

// }

// function feets(cityOne , distance , cityTwo) {

//     distance = distance * 3280.84;
//     document.write("The Distance between " + cityOne + " and " + cityTwo + " in Feets is " + distance + ".<br>");

// }

// function centimeters(cityOne , distance , cityTwo) {

//     distance = distance * 100000;
//     document.write("The Distance between " + cityOne + " and " + cityTwo + " in Centimeter is " + distance + ".<br>");

// }

// let cityOne = prompt("Enter First City Name");
// let cityTwo = prompt("Enter Second City Name");
// let distance = +prompt("Enter Distance between both Cities (in Km).");

// meters(cityOne , distance , cityTwo);
// inches(cityOne , distance , cityTwo);
// feets(cityOne , distance , cityTwo);
// centimeters(cityOne , distance , cityTwo);

// TODO Question No.09

// function overtime(time) {

//     if(time >= 40){

//         time = time - 40;
//         document.write("The Employee Worked for extra " + time + " hour and ");
//         let money = time * 12;
//         document.write("he earned " + money + ".00 .");

//     }

//     else {

//         document.write("The Employee didn't OverWorked.");
//     }

// }

// let time = +prompt("Enter Number of Hours Working.");

// overtime(time);

// TODO Question No.10

// function cashback(amount) {

//     let hundred = 0 , fifty = 0 , ten = 0;

//     while(amount!=0){

//         if(amount >= 100){

//             hundred++ ;
//             amount = amount - 100;
//         }

//         else if(amount < 100 && amount >= 50){

//             fifty++ ;
//             amount = amount - 50;
//         }

//         else if(amount < 50 && amount >= 10){

//             ten++ ;
//             amount = amount - 10;
//         }

//     }

//     if(hundred > 0 && fifty > 0 && ten > 0){

//         document.write("You will have " + hundred + " hundred notes " + fifty + " fifty notes " + ten + " ten notes.");

//     }

//     else if(hundred > 0 && ten > 0){

//         document.write("You will have " + hundred + " hundred notes " + ten + " ten notes.");
        
//     }

//     else if(hundred > 0 && fifty > 0){

//         document.write("You will have " + hundred + " hundred notes " + fifty + " fifty notes.");
        
//     }

//     else if(fifty > 0 && ten > 0){

//         document.write("You will have " + fifty + " fifty notes " + ten + " ten notes.");
        
//     }

//     else if(hundred > 0){

//         document.write("You will have " + hundred + " hundred notes.");
        
//     }

//     else if(fifty > 0){

//         document.write("You will have " + fifty + " fifty notes.");
        
//     }
    
//     else if(ten > 0){

//         document.write("You will have " + ten + " ten notes.");
        
//     }
// }

// alert("1. Fries - 80Rs \n2. Burger - 350Rs \n3. Pizza - 550Rs \n4. Cold Drink - 40Rs ");

// let order = prompt("Enter your Food Order Number.");
// let amount = prompt("Enter your Amount.");

// let fries = 80;
// let coldDrink = 40;
// let burger = 350;
// let pizza = 550;

// if(order == 1) {
    
//     amount = amount - fries;
//     cashback(amount);
// }

// else if(order == 2) {

//     amount = amount - burger;
//     cashback(amount);
// }

// else if(order == 3) {
    
//     amount = amount - pizza;
//     cashback(amount);
// }

// else if(order == 4) {
    
//     amount = amount - coldDrink;
//     cashback(amount);
// }

// else {

//     alert("Invalid Item.");
// }