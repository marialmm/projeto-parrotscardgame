let parrots = ['bobrossparrot', 'explodyparrot', 'fiestaparrot', 'metalparrot', 'revertitparrot', 'tripletsparrot', 'unicornparrot'];

parrots.sort(comparador);

function comparador() { 
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

    cards.sort(comparador);
    let game = document.querySelector('ul');
    for (let i = 0; i < numberOfCards; i++){
        game.innerHTML = game.innerHTML + `
        <li onclick = "turnCard(this)" class="card">
            <div class = "back">
                <img src="midias/front.png" alt="Papagaio">
            </div>
            <div class = "front">
                <img src="midias/${cards[i]}.gif" alt="Papagaio Metal">
            </div>
        </li>
        `
    }
}

function turnCard(card){
    card.classList.add('selecionada');
    turned = document.querySelectorAll('.selecionada');

    if (turned.length > 1){
        setTimeout(function(){
            for (let i = 0; i < turned.length; i++){
                turned[i].classList.remove('selecionada')
            }
        }, 1000);    
    }
}

const numberOfCards = chooseGame();
assembleGame(numberOfCards);