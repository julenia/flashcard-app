function showAnswer(){
    console.log('hello');
    document.getElementById('card').innerHTML=null;
    const ans = document.createElement('h1');
    card.appendChild(ans);

}
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
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
const random = getRndInteger(0, data.cards.length);
for(let i=0; i<data.cards.length; i++){
    if(i==random){ 
    const card = document.getElementById('card');
    const h1 = document.createElement('h1');
    const question = data.cards[i].question;
    console.log(question);
    h1.innerHTML=question;
    card.appendChild(h1);
    const cards = data.cards[i];
    card.onclick = function showAnswer(){
        card.innerHTML=null;
        const ans = document.createElement('h1');
        const answer = data.cards[i].answer;
        ans.innerHTML=answer;
        card.appendChild(ans);
    
    }
}

 }