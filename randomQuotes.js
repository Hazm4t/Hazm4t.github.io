var quoteList = [
  'If laughter is the best medicine, then your face is a medical miracle.',
  'You are the reason that the middle finger exists.',
  'You may support equal rights, but your face doesn\'t support equal proportions.',
  'I\'d make a joke.. but you are enough of one already.',
  'The only guy that would pick you up is the garbage collector.',
  'I\'d prefer a battle of wits, but you seem to be unarmed.',
  'Go step on a Lego',
  'You are the human equivelant of a participation award.',
  'Get bent loser.',
  'You are as sharp as a marble.',
]

var names = [
  'Abraham Lincoln',
  'Princess Diana',
  'Elvis Presley',
  'Barack Obama',
  'John F. Kennedy',
  'Oprah Winfrey',
  'Julius Ceaser',
]

let quote = quoteList[Math.floor(Math.random() * (quoteList.length))]
let name = names[Math.floor(Math.random() * (names.length))]
document.getElementById('quote').innerHTML = '"' + quote + '"' + " - " + name
