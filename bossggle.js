const clickLetter = document.querySelector('.gameBoard');
const selectedLetters = document.querySelector('.selectedLetters')
const clearLetters = document.querySelector('.clearButton')

clearLetters.addEventListener('click', function(){
  selectedLetters.innerHTML = ""
})
clickLetter.addEventListener('click', selectLetter)

function selectLetter(event) {
  event.preventDefault()
  event.target.setAttribute('class','activate')
  console.log(event.target.innerHTML);
  let oldDisplay = selectedLetters.innerHTML
  const newDisplay = oldDisplay + event.target.innerHTML
  selectedLetters.innerHTML = newDisplay
}
// var letters="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//
// function addLetter() {
//   var index= Math.floor(Math.random() * letters.length) +1;
//   return letters[index -1];
// }


