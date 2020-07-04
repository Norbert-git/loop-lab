//1.  Write a `for` loop that will iterate from 50 to 20.
//For each iteration, if the current number is a multiple of 3, console.log the value.

for (let i = 50; i>=20; i--){
    if (i % 3 === 0){
        console.log(i)
    }
}



//2.  Write out an "infinite loop" below. Don't run the loop in your console 
//unless you are prepared to force quit your browser!! 
//Check with the instructor to see if it is, or live dangerously and crash your browser!

//let num = 1
//while (num<=25){
  //console.log(num)
  // if you don`t write num++; in this line console.log will go into infinite loop
//}
//OR This will work also:
//let num = 25
//while (num>=1){
  //console.log(num)
  //num++;
//}

//4.  Using any looping mechanism, print out a date stamp for every day between 01/01/2020 and 01/07/2020. 
//Your output should look like this:


//The date is: 01/01/2020
//The date is: 02/01/2020
//The date is: 03/01/2020
//The date is: 04/01/2020
//The date is: 05/01/2020



for (let i = 1; i <=7; i++){
  console.log("The date is: 01/"+i+"/2020")
}


// 5.  Use a `for` loop that iterates from one to ten. 
// For each iteration in the for loop, use a while loop to print out 
// "For loop counter: x" three times where "x" is the current iteration of the `for` loop.


// Sample Output
//For loop counter: 1
//For loop counter: 1
//For loop counter: 1
//For loop counter: 2
//For loop counter: 2
//For loop counter: 2
//For loop counter: 3
//For loop counter: 3

for (let i = 1; i <=10; i++){
  console.log("For loop counter: "+i)
  console.log("For loop counter: "+i)
  console.log("For loop counter: "+i)
}
//If it needs to say For loop counter: I would add ("For loop counter:" +i)

//Part 2


//1.  Loop through this array and print every other value, starting with the second.

const presidents = ["Donald", "Barack", "George Jr", "Bill", "George", "Ronald", "Jimmy", "Gerald",
 "Richard", "Lyndon", "John", "Dwight", "Harry", "Franklin", "Herbert", "Calvin", "Warren", "Woodrow",
  "William", "Theodore"];

for(let i =0; i< presidents.length; i++){
    if (i % 2 !== 0)
    console.log (presidents[i])
}




// 2 Create a new array with the gluten-free options from this menu:

const menu = [{name: "pizza", glutenFree: false},{name: "salad", glutenFree: true},{name: "donut", 
glutenFree: false},{name: "steak", glutenFree: true},{name: "chicken", glutenFree: true},
{name: "cheeseburger", glutenFree: false}];


for(let i = 0; i<= menu.length; i++) {
  if (menu [i].glutenFree === true)
  console.log(i)
}




// 3 Loop through the following array and push the items that are not numbers into a seperate array


const mixedArray = [1, 2, 3, 'taco', 4, 5, 6, 'burrito', 7, 8, 9, 'Whats the deal with airplane peanuts',
3.14, {barry: "Mannilow",}, 6, 55, null, "Old " + "Crow " + " Medicine Show", 3, 2,
"I want the calzone from pizanos", "Death blow", "Firestorm", "48", 30]


for (let i = 0; i < mixedArray.length; i++) {
 
}

// 4. Write a `while` loop that uses the length of the string 
// `"Javascript knows the length of every string."`
//  to print each letter of the provided string, one character at a time.