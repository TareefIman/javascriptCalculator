const operations = {
  '+': function(a, b) { return a + b },
  '-': function(a, b) { return a - b },
  '*': function(a, b) { return a * b },
  '/': function(a, b) { return a / b }
}

function operate() {
  let done = false;
  operations.prompt (`Enter a problem to solve. You may use + - * /. Make sure there's a space between each character. 
  \nPress enter when ready.`);
  while (!done) {
    const add = prompt('\nsolve a problem: ');
    let answer = add.split(' ');

    if (answer.length === 3) {
      let a = parseFloat(answer[0]);
      let b = parseFloat(answer[2]);
      if (answer[1] === '/') {
        console.log(operations[answer[1]](a, b).toFixed(2));
        done = true;
      } else {
        console.log(operations[answer[1]](a, b));
        done = true;        
      }
    } else {
      console.log(`Put a space between the numbers and operation and try again. `);
    }
  }
}

operate();

