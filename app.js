

// prendo il nome
let userName = prompt('Qual è il tuo nome?');
console.log(userName)

// prendo il cognome
let userSurname = prompt('Qual è il tuo cognome ?');
console.log(userSurname)
// prendo il colore preferito

let favouriteColor = prompt(' Qual è il tuo colore preferito? ');
console.log(favouriteColor)
// aggiungo un numero

let randomNumber = Math.floor(Math.random() * 100);

console.log(randomNumber)

// creo la password

let superSafePassword = userName + userSurname + favouriteColor + randomNumber

console.log(superSafePassword)

// trovo il punto in cui farla comparire

const pwd = document.getElementById('pwd')

console.dir(pwd)

// stampo nell'html

pwd.innerHTML = 'La tua nuova password è: ' + superSafePassword

