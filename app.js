//1.  Write a `for` loop that will iterate from 50 to 20.
//For each iteration, if the current number is a multiple of 3, console.log the value.

for (let i = 50; i>=20; i--){
    if (i % 3 === 0){
        console.log(i)
    }
}



//2.  Write out an "infinite loop" below. Don't run the loop in your console unless you are prepared to force quit your browser!! Check with the instructor to see if it is, or live dangerously and crash your browser!

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

//4.  Using any looping mechanism, print out a date stamp for every day between 01/01/2020 and 01/07/2020. Your output should look like this:


//The date is: 01/01/2020
//The date is: 02/01/2020
//The date is: 03/01/2020
//The date is: 04/01/2020
//The date is: 05/01/2020



for (let i = 1; i <=7; i++){
  console.log("The date is: 01/"+i+"/2020")
}


//5.  Use a `for` loop that iterates from one to ten. For each iteration in the for loop, use a while loop to print out "For loop counter: x" three times where "x" is the current iteration of the `for` loop.


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
  console.log(i)
  console.log(i)
  console.log(i)
}
//If it needs to say For loop counter: I would add ("For loop counter:" +i)
