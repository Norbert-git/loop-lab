![GA logo](https://camo.githubusercontent.com/6ce15b81c1f06d716d753a61f5db22375fa684da/68747470733a2f2f67612d646173682e73332e616d617a6f6e6177732e636f6d2f70726f64756374696f6e2f6173736574732f6c6f676f2d39663838616536633963333837313639306533333238306663663535376633332e706e67)

## Loops Lab

### Setup
1. Fork this repository to your Github Enterprise account.
2. Using the green "clone or download" button on the **forked repo**, copy the link to the repo and use it to clone this assignment to your machine.
3. Work through the steps below, making sure to commit your work after each correct answer - make those commit messages descriptive!
4. You will need to create an app.js file to write the code in. You can use a program like [repl.it](https://repl.it/) to check your code works as you expect it to.

### Part 1: Loops with Conditions

1.  Write a `for` loop that will iterate from 50 to 20.
For each iteration, if the current number is a multiple of 3, console.log the value.

for (let i = 50; i>=20; i--){
    if (i % 3 === 0){
        console.log(i)
    }
}



2.  Write out an "infinite loop" below. Don't run the loop in your console unless you are prepared to force quit your browser!! Check with the instructor to see if it is, or live dangerously and crash your browser!

//let num = 1
//while (num<=25){
  //console.log(num)
  // if you don`t write num++; in this line console.log will go into infinite loop
}
//OR This will work also:
//let num = 25
//while (num>=1){
  //console.log(num)
  //num++;
}




3.  Use a while loop to print out the current mileage of your car (or just use 542,841 as a fake mileage) in 1000 mile increments.
    - at 10,000 miles, print out the string "Your car is still new"
    - at 100,000 miles, print out the string "Your car is definitely used"
    - at 150,000 miles, print out "time for a tune up"
    - at 300,000 miles, print out "time for a new car"
    - at 400,000 miles, print out "new car required", **and exit the loop**







4.  Using any looping mechanism, print out a date stamp for every day between 01/01/2020 and 01/07/2020. Your output should look like this:

```
The date is: 01/01/2020
The date is: 02/01/2020
The date is: 03/01/2020
The date is: 04/01/2020
The date is: 05/01/2020
...
```


for (let i = 1; i <=7; i++){
  console.log("The date is: 01/"+i+"/2020")
}


5.  Use a `for` loop that iterates from one to ten. For each iteration in the for loop, use a while loop to print out "For loop counter: x" three times where "x" is the current iteration of the `for` loop.

```
// Sample Output
For loop counter: 1
For loop counter: 1
For loop counter: 1
For loop counter: 2
For loop counter: 2
For loop counter: 2
For loop counter: 3
For loop counter: 3
...
```
for (let i = 1; i <=10; i++){
  console.log(i)
  console.log(i)
  console.log(i)
}
//If it needs to say For loop counter: I would add ("For loop counter:" +i)




Hint: current iteration is stored in a variable

### Part 2: Loops and Complex Datatypes

> This section of the lab is meant to be completed after the "Arrays and Iteration" lesson 

1.  Loop through this array and print every other value, starting with the second.

```javascript
const presidents = ["Donald", "Barack", "George Jr", "Bill", "George", "Ronald", "Jimmy", "Gerald", "Richard", "Lyndon", "John", "Dwight", "Harry", "Franklin", "Herbert", "Calvin", "Warren", "Woodrow", "William", "Theodore"];
```
for(let i =0; i< presidents.length; i++){
    if (i % 2 !== 0)
    console.log (presidents[i])
}

2.  Create a new array with the gluten-free options from this menu:

```javascript
const menu = [{name: "pizza", glutenFree: false},{name: "salad", glutenFree: true},{name: "donut", glutenFree: false},{name: "steak", glutenFree: true},{name: "chicken", glutenFree: true},{name: "cheeseburger", glutenFree: false}];
```

3.  Loop through the following array and push the items that are not numbers
into a seperate array

`const mixedArray = [1, 2, 3, 'taco', 4, 5, 6, 'burrito', 7, 8, 9, 'Whats the deal with airplane peanuts', 3.14, {barry: "Mannilow",}, 6, 55, null, "Old " + "Crow " + " Medicine Show", 3, 2, "I want the calzone from pizanos", "Death blow", "Firestorm", "48", 30]`

4. Write a `while` loop that uses the length of the string `"Javascript knows the length of every string."` to print each letter of the provided string, one character at a time.


### Bonus Question(hard mode)
Create a new array with all the players that have a true value of goat (greatest of all time) from each league.

```javascript
const league = [{name: "NFL", players: [{name: "Tom Brady", goat: false}, {name: "Walter Payton", goat: true}]}, {name: "NBA", players: [{name: "Michael Jordan", goat: true}, {name: "Lebron James", goat: false}]},{name: "MLB", players: [{name: "Babe Ruth", goat: true}, {name: "Alex Rodriguez", goat: false}]}]
```

> The Bonus exercise is not a required part of the deliverable (but is great practice!)
