function Card(index) {
    this.index = index;
}
Card.prototype.Try = function(square) {
    square.classList.add('square-correct');
}
Card.prototype.TryWrong = function(square) {
    square.classList.add('square-wrong');
}
const cards = [
    new Card(1),
    new Card(2),
    new Card(3),
    new Card(4),
    new Card(5),
    new Card(6),
    new Card(7),
    new Card(8),
    new Card(9),
];
let clicked = true;
const winText = "Перемога";
const defeatText = "Поразка";
function renderSquares (cards) {
    
        const squareContainer = document.querySelector(".squares-container");
        cards.forEach((item) => {
            const square = document.createElement('div');
            let squareIndex = document.createElement('h4');
            squareIndex.innerHTML = item.index;
            square.appendChild(squareIndex);
            square.classList.add('square');
            
                square.addEventListener('click', () => {
                    if (!clicked) return;
                    clicked = false;
                    document.querySelectorAll('.square').forEach(dom => {
                        if (dom === square) return;
                        dom.querySelector('h4').innerHTML = winText;
                        dom.classList.add('square-wrong');
                        dom.classList.add('flipped');
                        clicked = false;
                    
                    });

                    item.Try(square);
                    square.querySelector('h4').innerHTML = defeatText;
                    square.classList.add('flipped');
                });
                squareContainer.appendChild(square);
        });
    }

renderSquares(cards);