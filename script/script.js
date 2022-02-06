let parrots = ['bobrossparrot', 'explodyparrot', 'fiestaparrot', 'metalparrot', 'revertitparrot', 'tripletsparrot', 'unicornparrot'];

parrots.sort(comparator);

let move = 0;
let numberOfCards = 0;
let second = parseInt(document.querySelector('.counter').innerHTML);
let timer = document.querySelector('.counter');
let interval = null;
let lock = false;
let turned = null;
let end = false;

function counter() {
    second += 1;
    
    timer.innerHTML = second;
}

function comparator() { 
	return Math.random() - 0.5; 
}

function chooseGame(){
    let game = parseInt(prompt('Com quantas cartas você deseja jogar (insira um valor par entre 4 e 14)?'));
    while (game % 2 !== 0 || game < 4 || game > 14){
        game = prompt('Valor inválido. Com quantas cartas você deseja jogar (insira um valor par entre 4 e 14)?');
    }
    return game;
}

function assembleGame(numberOfCards){
    let cards = [];
    for (let i = 0; i < numberOfCards / 2; i++){
        cards[2 * i] = parrots[i];
        cards[2 * i + 1] = parrots[i];
    }

    cards.sort(comparator);
    let game = document.querySelector('ul');
    for (let i = 0; i < numberOfCards; i++){
        game.innerHTML = game.innerHTML + `
        <li onclick = "turnCard(this)" class="card" data-identifier="card">
            <div class = "back" data-identifier="back-face">
                <img src="midias/front.png" alt="Papagaio">
            </div>
            <div class = "front" data-identifier="front-face">
                <img src="midias/${cards[i]}.gif" alt="${cards[i]}">
            </div>
        </li>
        `
    }
    timer.innerHTML = 0;
    second = 0;
    interval = setInterval(counter, 1000);

}

function turnCard(card){
    if (!lock && !card.classList.contains('selected') && !end){
        if (!card.classList.contains('correct')){
        card.classList.add('selected');
        move += 1;
        }
        
        turned = document.querySelectorAll('.selected');
        
        if (turned.length === 2){
            lock = true;
            if(turned[0].innerHTML === turned[1].innerHTML){
                for (let i = 0; i < turned.length; i++){
                    turned[i].classList.add('correct');   
                }
            }
            setTimeout(
                `for (let i = 0; i < turned.length; i++){
                    turned[i].classList.remove('selected');
                }
                lock = false;`
            , 1000);   
        }
        
        correct = document.querySelectorAll('.correct');
        if (correct.length === numberOfCards){
            setTimeout(endOfGame, 300);
            end = true;
        }
    }

}


function endOfGame(){
    clearInterval(interval);
    alert(`Você ganhou o jogo em ${move} jogadas e ${second} segundos!`);
    let playAgain = prompt('Deseja jogar novamente (sim/não)?')
    while (playAgain.toUpperCase() !== 'SIM' && playAgain.toUpperCase() !== 'NÃO'){
        playAgain = prompt('Resposta inválida! Deseja jogar novamente (sim/não)?')
    }
    if (playAgain.toUpperCase() === 'SIM'){ 
        let game = document.querySelector('ul');
        game.innerHTML = '';
        playGame();
    }
}

function playGame(){
    move = 0;
    end = false;
    numberOfCards = chooseGame();
    assembleGame(numberOfCards);
}

playGame()