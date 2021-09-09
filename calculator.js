var readlineSync = require('readline-sync');

/* these are the operators*/
const values = { 
  '+': function(a, b) { return a + b },
  '-': function(a, b) { return a - b },
  '*': function(a, b) { return a * b },
  '/': function(a, b) { return a / b }
}

function run(){
  let question1 = "";
   let operation = false;

while(!operation) {
  question1 = readlineSync.question('What operation would you like to perform? (+, -, *, /) ');
  if (question1 === '+'
      || question1 === '-'
      || question1 === '/'
      || question1 === '*') {
    operation = true;
    break;
  } else {
    console.log('That is not a valid operation!');
  }
}
  var question2= readlineSync.questionInt('Please enter the first number')
  var question3= readlineSync.questionInt('Please enter the second number');
  var total = question2 + question1 + question3;
  let answer = total.split('')

  if( answer.length === 3 ){
      let a = parseFloat(answer[0]);
      let b = parseFloat(answer[2]);
      var end = "The result is ";
        console.log( end + values[answer[1]](a, b));
    } 
  
  }
run()
