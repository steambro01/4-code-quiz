// assigned start button to a variable
var startBtn = document.getElementById('startBtn');
// start screen variable
var startScreen = document.getElementById('startScreen')

// once start button is pressed
startBtn.addEventListener('click',function(){

// array of questions and answers
var questions = {
    
}
// hide start screen description and start button
 startScreen.classList.add('hidden');

//remove hidden class from questions section and display first question
var form = document.getElementById('answersForm');
form.classList.remove('hidden');


Event.preventDefault();
})