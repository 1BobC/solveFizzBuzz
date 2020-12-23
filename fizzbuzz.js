//create input popup for entering number
let answer= parseInt(prompt('Please enter the number you would like to FizzBuzz up to:  '));
//parseInt function returns a number from the user's input
for (let i = 1; i <= answer; i++) {         //function loops throught to the number entered
    //if the current number is divisible by 3 AND 5  print Fizz Buzz
    //this function has to go first... why?
if (i % 3 === 0 && i % 5 === 0){    //
    console.log('FizzBuzz');
    //if the current number is divisible by 3 print Fizz
}if (i % 3 === 0) {
    console.log('Fizz');
    //if the current number is divisible by 5 print Buzz
}else if(i % 5 === 0) {
    console.log('Buzz');
}else{
    console.log(i);    
}   
}
