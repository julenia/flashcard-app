function showAnswer(){
    console.log('hello');
    document.getElementById('card').innerHTML=null;
    const ans = document.createElement('h1');
    card.appendChild(ans);

}



const data = {
    cards : [
        {
            question: "Netherlands",
            answer: "Amsterdam",
        },
        {
            question:"Brussels",
            answer: "Belgium",
        },
        {
            question: "France",
            answer: "Paris",
        },
        {
            question: "Poland",
            answer: "Warsaw",
        },
        {
            question: "Ukraine",
            answer: "Kiev",
        },
    ]
}


const card = document.getElementById('card');
const h1 = document.createElement('h1');
const question = data.cards[0].question;
console.log(question);
h1.innerHTML=question;
card.appendChild(h1);


for(let i=0; i<data.cards.length; i++){
    const cards = data.cards[i];
    card.onclick = function showAnswer()
    {
        card.innerHTML=null;
        const ans = document.createElement('h1');
        const answer = data.cards[0].answer;
        ans.innerHTML=answer;
        card.appendChild(ans);
    
    }

}