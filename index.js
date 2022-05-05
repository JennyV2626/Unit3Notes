const cardList = document.querySelector('.cardList');
const score = document.querySelector('h3');
let numPoints = 0;

score.textContent = `Score: ${numPoints}`;
buildBoard();



let interval = setInterval(function(){
    addCard(cardList.children.length + 1)
}, 2000);

cardList.addEventListener('click', function(e){
    numPoints++;
    score.textContent = `Score: ${numPoints}`
    console.log(e.target);
    if(e.target.matches('.cardList')){
        return
    }
    if(e.target.classList.contains('active')){
        e.target.classList.remove('active');
        e.target.classList.add('inactive');
        numPoints++;
        return
    }
    e.target.remove();
    let children = cardList.children;
    if(children.length < 1){
        clearInterval(interval);
    }
})

function addCard(value){
    let card = document.createElement('div');
    card.classList.add('card');
    card.classList.add('active');
    card.innerHTML = value;
    cardList.appendChild(card);
}

function buildBoard(){
    for(let i=0; i<12; i++){
        addCard('starter');
    }
}