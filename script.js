let userAge = 0
document.getElementById('start').addEventListener('click', ageVerification)

function ageVerification () {
  userAge = document.getElementById('userInput').value
  if (userAge >= 18) {
    document.getElementById('answer').innerHTML = 'You can see an R rated movie alone'
  } else if (userAge >= 13) {
    document.getElementById('answer').innerHTML = 'You can see a PG-13 rated movie alone'
  } else if (userAge >= 5) {
    document.getElementById('answer').innerHTML = 'You can see a G or PG movie alone'
  } else {
    document.getElementById('answer').innerHTML = 'You should see movies with your parents'
  }
}