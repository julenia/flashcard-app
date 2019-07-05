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
    }, ],
    literature: [{
        book: "Romeo and Julliet",
        author: "William Sheakspeare",
    },
    {
        book: "Harry Potter",
        author: "J.K. Rowling",

    },
    {
        book: "Anna Karenina",
        author: "L. Tolstoj",
    }
]
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
            console.log(question)
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
    console.log(quest)
    data.cards.push({question : quest, answer: ans})
    inputQuestion.value= null;
    inputAnswer.value = null;
}

function giveBook(data){
    const random = getRndInteger(0, data.literature.length);
    for (let i = 0; i < (data.literature.length-1); i++) {
    if (i == random) {
    const lit = document.getElementById('literature');
    lit.innerHTML = null;
    const h1 = document.createElement('h1');
    const book = data.literature[i].book;
    h1.innerHTML = book;
    console.log(book)
    lit.appendChild(h1);
    //const book = data.literature[i];
    book.onclick = function showAuthor() {
        book.innerHTML = null;
        const aut = document.createElement('h1');
        const author = data.literature[i].author;
        aut.innerHTML = author;
        book.appendChild(aut);
    }
}
}
}
function chooseCategory(){    
    console.log(selection);
    const strUser = selection.options[selection.selectedIndex].value;
    if(strUser == 'countries') {
        giveQuestion(data);
    }
    if(strUser == 'literature'){
        giveBook(data);
            
        }

    }


const addButton = document.getElementById('addButton');
addButton.onclick = function() {
    newQuestions();
    
}
const selection = document.getElementById('selection');
selection.onchange= function(){
    chooseCategory(data);

}