function showAnswer() {
    document.getElementById('card').innerHTML = null;
    const ans = document.createElement('h1');
    card.appendChild(ans);
 }
 function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
 }
 const data = {
    cards: [{
        question: "Netherlands",
        answer: "Amsterdam",
    }, {
        question: "Brussels",
        answer: "Belgium",
    }, {
        question: "France",
        answer: "Paris",
    }, {
        question: "Poland",
        answer: "Warsaw",
    }, {
        question: "Ukraine",
        answer: "Kiev",
    }, ]
 }
 function giveQuestion(currentData) {
    const random = getRndInteger(0, currentData.cards.length);
    for (let i = 0; i < (currentData.cards.length-1); i++) {
        if (i == random) {
            const card = document.getElementById('card');
            card.innerHTML = null;
            const h1 = document.createElement('h1');
            const question = currentData.cards[i].question;
            h1.innerHTML = question;
            console.log(question);
            card.appendChild(h1);
            const cards = currentData.cards[i];
            card.onclick = function showAnswer() {
                card.innerHTML = null;
                const ans = document.createElement('h1');
                const answer = currentData.cards[i].answer;
                ans.innerHTML = answer;
                card.appendChild(ans);
            }
        }
    }
 }
 giveQuestion(data)
 const nextButton = document.getElementById('newButton');
 nextButton.onclick = function(){
    giveQuestion(data);
}
 
function newQuestions(){
    let inputQuestion = document.getElementById('question');
    let inputAnswer = document.getElementById('answer');
    const quest = inputQuestion.value;
    const ans = inputAnswer.value;
    data.cards.push({question : quest, answer: ans})
    inputQuestion.value= null;
    inputAnswer.value = null;
}

const addButton = document.getElementById('addButton');
addButton.onclick = function() {

    newQuestions()
    
}