//How well do you know me quiz
//project 1

var readLineSync = require('readline-sync');

function quiz(){
  var score = 0;
  console.log("Do you know me?\n");    
  var q1 = readLineSync.question('Is Ironman my favourite superhero?(yes/no)');

  if(q1 === 'yes'){
    score++;
    console.log('You are right!');
    console.log("score: ", score);    
  }
  else{
    console.log('You are wrong');
    console.log()
  }

  console.log();
  var q2 = readLineSync.question('Is Biryani my favourite food?(yes/no)');

  if(q2 === 'yes'){
    score++;
    console.log('You are right!');
    console.log("score: ", score);   
  }
  else{
    console.log('You are wrong');
    console.log()
  }

  console.log();
  var q3 = readLineSync.question('Do I live in Bangalore?(yes/no)');

  if(q3 === 'no'){
    score++;
    console.log('You are right!');
    console.log("score: ", score); 
  }
  else{
    console.log('You are wrong');
    console.log();   
  }

  console.log();
  var q4 = readLineSync.question('Do I like cricket?(yes/no)');

  if(q4 === 'yes'){
    score++;
    console.log('You are right!');
    console.log("score: ", score);    
  }
  else{
    console.log('You are wrong');
    console.log()
  }

  console.log();
  var q5 = readLineSync.question('Was I born in Mumbai?(yes/no)');

  if(q5 === 'no'){
    score++;
    console.log('You are right!');
    console.log("score: ", score); 
  }
  else{
    console.log('You are wrong');
    console.log();   
  }

  console.log();
  var q6 = readLineSync.question('Do I like anime?(yes/no)');

  if(q6 === 'yes'){
    score++;
    console.log('You are right!');
    console.log("score: ", score);    
  }
  else{
    console.log('You are wrong');
    console.log()
  }

  console.log("Final score: ", score);
}

quiz();