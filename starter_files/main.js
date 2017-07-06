// Rock Paper Scissors Function
function rps (player1, player2) {
  // write code here
  if (player1 ==='rock' && player2 === 'paper'){
  return ('Paper Wins!');
}
else if ( player1 ==='scissors' && player2 === 'paper' ){
  return ('Scissors Wins!');
}
else if ( player1 ==='scissors' && player2 === 'rock' ){
  return ('Rock Wins!');
}
else{
return ('A Tie!');

}
}


// Don't edit below these lines
console.log(rps('rock', 'paper'));
console.log(rps('scissors', 'paper'));
console.log(rps('scissors', 'rock'));
console.log(rps('rock', 'rock'));
