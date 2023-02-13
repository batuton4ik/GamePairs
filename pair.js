

let cardsFlipped = false
let firstCard
let secondCard
let blockCard = false

const card = document.querySelectorAll('.card')

function flipCard (){

    if(blockCard) return
    if (this === firstCard) return;
    this.classList.add('flip')

    if(!cardsFlipped){
        cardsFlipped = true
        firstCard = this
        return
    }

    secondCard = this
    //cardsFlipped = false

    checking()
}

function checking(){
    if(firstCard.dataset.framework === secondCard.dataset.framework){
    disableCards()
    return
    }
    unflipedCard()
}

function disableCards(){
    firstCard = removeEventListener('click', flipCard)
    secondCard = removeEventListener('click', flipCard)

    resetBoard()
}

function unflipedCard(){
    blockCard = true
    setTimeout(() => {
        firstCard.classList.remove('flip')
        secondCard.classList.remove('flip')
        resetBoard()
    }, 700)

    
}

function resetBoard() {
    [cardsFlipped, blockCard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

(function randomPosition (){
    card.forEach(card =>{
        let randomPos= Math.floor(Math.random()*16)
        card.style.order = randomPos
    })
})()
card.forEach(card => card.addEventListener('click', flipCard))



function createCardList() {   // Создание блока для карточек, ненумерованный список
    const list = document.createElement('ul');
    list.classList.add('cards_list');
    return list;
  }

function createCard(idValue, numberOfCards) {  // Создает и возвращает карточку с атрибутами
    const containerWidth = document.querySelector('.memory-game').offsetWidth; // Берем ширину контейнера
    const cardWidth = containerWidth * 0.85 / (Math.sqrt(numberOfCards)); // Расчет ширины карточки
    const card = document.createElement('li');
    const button = document.createElement('button');

    card.classList.add('card');
    card.setAttribute("style", `width: ${cardWidth}px; height: ${cardWidth}px;`);
    button.classList.add('btn');
    button.id = idValue;
    button.setAttribute("style", `font-size: ${cardWidth * 0.7}px;`)

    card.append(button);

    return {
      card,
      button,
    };
  }





document.addEventListener('DOMContentLoaded', function() 
{
    let input = document.getElementById('input');
    let button = document.getElementById('timers');
    let div = document.getElementById('div');
    let current = 60;
    let timer;
  
    function workTimer() 
    {
      div.textContent = --current  ;
      if (current <= 0){
        timer = clearInterval(timer);
        alert('Время вышло') 
        window.location.reload()
      }
    }
  
    function onClick() 
    {
      timer = clearInterval(timer);
      let time = 60
      let current = --time
      if (current>0)
      {
        div.textContent = current;
        timer = setInterval(workTimer, 1000);
      }
    }
  
    button.addEventListener('click', onClick);
  })






