function chooseCards(){
    let cards = parseInt(prompt('Com quantas cartas você deseja jogar (insira um valor entre 4 e 14)?'));
    while (cards % 2 !== 0 || cards < 4 || cards > 14){
        cards = prompt('Valor inválido. Com quantas cartas você deseja jogar (insira um valor entre 4 e 14)?');
    }
    return cards;
}

function assembleGame(cards){
    let game = document.querySelector('ul');
    for (let i = 0; i <= cards; i += 1 ){
        game.innerHTML = game.innerHTML + `
        <li>
            <img src="midias/front.png" alt="Papagaio">
        </li>
        `
    }
}

const cards = chooseCards();
assembleGame(cards);