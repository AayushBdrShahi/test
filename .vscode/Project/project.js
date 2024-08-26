// const buttons = document.querySelectorAll('.button');
// const body = document.querySelector('body');  // Use querySelector instead of querySelectorAll

// buttons.forEach((button) => {
//     console.log(button);

//     button.addEventListener('click', function (e) {
//         console.log(e);
//         console.log(e.target);

//         if (e.target.id === 'Black') {
//             body.style.backgroundColor = 'Black';
//         }
//         if (e.target.id === 'White') {  // Make sure this matches the ID in HTML
//             body.style.backgroundColor = 'white';
//         }
//         if (e.target.id === 'Yellow') {  // Match case sensitivity with HTML
//             body.style.backgroundColor = 'yellow';
//         }
//         if (e.target.id === 'Blue') {  // Match case sensitivity with HTML
//             body.style.backgroundColor = 'blue';
//         }
//         if (e.target.id === 'Purple') {  // Add this condition as per your HTML
//             body.style.backgroundColor = 'purple';
//         }
//     });
// });



                    // Project 2

//const form = document.querySelector('form')

// this usecase will give you empty
// const weight =  parseInt(document.querySelector('#weight').value)


// form.addEventListener('submit',function(e){
//     e.preventDefault()
//    const height =  parseInt(document.querySelector('#height').value)
//    const weight =  parseInt(document.querySelector('#weight').value)
//    const results =  (document.querySelector('#results'))



//    if(height ===" " || height < 0 || isNaN(height)){ 
//     results.innerHTML = `Please give a valid height ${height}`;
// }else if(weight ===" " || weight < 0 || isNaN(weight)){ 
//     results.innerHTML = `Please give a valid weight ${weight}`;
// }else{
//    const bmi =  (weight / ((height * height) / 10000)).toFixed(2);
//    //show the result
//    results.innerHTML = `<span>${bmi}</span>`;

//    if(bmi >= 25){
//        results.innerHTML += `<p>Overweight</p>`;
//        console.log("Overweight");
//    }
//    else if(bmi >= 18.5 && bmi < 25){
//        results.innerHTML += `<p>Normal Range</p>`;
//        console.log("Normal Range");
//    }
//    else{
//        results.innerHTML += `<p>Underweight</p>`;
//        console.log("Underweight");
//    }
// }
// })




                        // Project 3


                    //     document.addEventListener('DOMContentLoaded', function() {                      
                    //       const clock = document.getElementById('clock');
                      
                    //       setInterval(function(){
                    //           let date = new Dadatete();
                    //           clock.innerHTML = date.toLocaleTimeString();
                    //       }, 1000);
                    //   });
                      

                    //Project 4
                    let randomNumber = Math.floor(Math.random() * 100 + 1);
                    console.log(randomNumber);
                    
                    const submit = document.querySelector('#subt');
                    const userInput = document.querySelector('#guessField');
                    const guessSlot = document.querySelector('.guesses');
                    const remaining = document.querySelector('.lastResult');
                    const loworHi = document.querySelector('.lowOrHi');
                    const startOver = document.querySelector('.resultParas');
                    
                    const p = document.createElement('p');
                    
                    let prevGuess = [];
                    let numGuess = 1;
                    let playGame = true;
                    
                    if (playGame) {
                        submit.addEventListener('click', function (e) {
                            e.preventDefault();
                            const guess = parseInt(userInput.value);
                            console.log(guess);
                            validateGuess(guess);
                        });
                    }
                    
                    function validateGuess(guess) {
                        if (isNaN(guess)) {
                            alert("Please enter a valid number");
                        } else if (guess <= 1) {
                            alert("Please enter a number more than 1");
                        } else if (guess > 100) {
                            alert("Please enter a number less than 100");
                        } else {
                            prevGuess.push(guess);
                            if (numGuess === 11) {
                                displayGuess(guess);
                                displayMessage(`Game Over. Random Number was ${randomNumber}`);
                                endGame();
                            } else {
                                displayGuess(guess);
                                checkGuess(guess);
                            }
                        }
                    }
                    
                    function checkGuess(guess) {
                        if (guess === randomNumber) {
                            displayMessage(`You guessed it right!`);
                            endGame();
                        } else if (guess < randomNumber) {
                            displayMessage(`Number is too low`);
                        } else if (guess > randomNumber) {
                            displayMessage(`Number is too high`);
                        }
                    }
                    
                    function displayGuess(guess) {
                        userInput.value = '';
                        guessSlot.innerHTML += `${guess}  `;
                        numGuess++;
                        remaining.innerHTML = `${11 - numGuess}`;
                    }
                    
                    function displayMessage(message) {
                        loworHi.innerHTML = `<h2>${message}</h2>`;
                    }
                    
                    function endGame() {
                        userInput.value = '';
                        userInput.setAttribute('disabled', '');
                        p.classList.add('button');
                        p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
                        startOver.appendChild(p);
                        playGame = false;
                        newGame();
                    }
                    
                    function newGame() {
                        const newGameButton = document.querySelector('#newGame');
                        newGameButton.addEventListener('click', function (e) {
                            randomNumber = Math.floor(Math.random() * 100 + 1);
                            prevGuess = [];
                            numGuess = 1;
                            guessSlot.innerHTML = '';
                            remaining.innerHTML = `${11 - numGuess}`;
                            userInput.removeAttribute('disabled');
                            startOver.removeChild(p);
                            playGame = true;
                        });
                    }
                    