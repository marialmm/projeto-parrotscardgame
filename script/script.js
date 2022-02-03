function chooseCards(){
    let cards = parseInt(prompt('Com quantas cartas você deseja jogar (insira um valor par entre 4 e 14)?'));
    while (cards % 2 !== 0 || cards < 4 || cards > 14){
        cards = prompt('Valor inválido. Com quantas cartas você deseja jogar (insira um valor par entre 4 e 14)?');
    }
    return cards;
}

function assembleGame(cards){
    let game = document.querySelector('ul');
    for (let i = 1; i <= cards; i += 1 ){
        game.innerHTML = game.innerHTML + `
        <li onclick = "turnCard(this)" class="card">
            <div class = "back">
                <img src="midias/front.png" alt="Papagaio">
            </div>
            <div class = "front">
                <img src="midias/metalparrot.gif" alt="Papagaio Metal">
            </div>
        </li>
        `
        // const card = document.querySelector('li:last-child');

    }
}

function turnCard(card){
    card.classList.toggle('selecionada');
}

const cards = chooseCards();
assembleGame(cards);