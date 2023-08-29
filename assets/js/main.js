/* 

Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.

*/

// random number for player and pc 

const playerNumber = Math.floor(Math.random() * 6) + 1;

const pcNumber = Math.floor(Math.random() * 6) + 1;

console.log(pcNumber, playerNumber);

let winner;

// who is the winner? 

if (playerNumber > pcNumber) {

    winner  = 'Player'
    console.log(`${winner} has won!!`);

} else if (playerNumber < pcNumber) {

    winner = 'Pc'
    console.log(`${winner} has won!!`);

} else {

    console.log('Even, no one wins');

}



/* 

Mail
Chiedi all'utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
Bonus
Usiamo un input e un bottone per inserire la mail e poi mostriamo i risultati in pagina.

*/

// create array of emails 

const usersEmail = [
    'email_1@email.it',
    'email_2@email.it',
    'email_3@email.it',
    'email_4@email.it',
    'email_5@email.it',
    'email_6@email.it',
    'email_7@email.it',
    'email_8@email.it',
]

console.log(usersEmail);

// ask the email to user 



// list check

const submit = document.querySelector('button');

submit.addEventListener('click', function() {

    let joinEmail = document.getElementById('emailDOM').value;
    let canEnter = false;
    console.log(joinEmail);

    for (let i = 0; i < usersEmail.length; i++) {

        if (joinEmail === usersEmail[i]) {
    
            canEnter = true;
    
        } else {

            canEnter = false;

        }
    
    }
    
    if (canEnter) {
    
        console.log('Welcome host');
    
    } else {
    
        console.log('denied access');
    
    }

})
