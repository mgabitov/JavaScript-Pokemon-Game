import Pokemon from "./pokemon.js";
import {random, generateLog, countBtn} from "./utils.js";
import {pokemons} from "./pokemons.js";

function $getElById(id) {
    return document.getElementById(id);
}
function play2() {
    let audio = new Audio('./assets/mk3-00225.mp3');
    audio.play();
}
const $control = document.querySelector('.control');
const $startBtn = document.createElement('button');
$startBtn.classList.add('button');
$startBtn.innerText = 'Start the Game!';
$control.appendChild($startBtn);

$startBtn.addEventListener("click", () => {
    showButtons();
    $startBtn.remove();
})

function showButtons() {
    let i = random(pokemons.length - 1);
    let firstPokemon = pokemons[i];

    const $elImgPlayer1 = $getElById('img-player1');
    $elImgPlayer1.src = firstPokemon.img;

    let player1 = new Pokemon({
        ...firstPokemon,
        selectors: 'player1',
    })

    $getElById('name-player1').innerText = player1.name;

    let j = random(pokemons.length - 1);
    let secondPokemon = pokemons[j];

    let player2 = new Pokemon({
        ...secondPokemon,
        selectors: 'player2',
    })
    
    $getElById('name-player2').innerText = player2.name;
    const $elImgPlayer2 = $getElById('img-player2');
    $elImgPlayer2.src = secondPokemon.img;
    player1.attacks.forEach(item => {
        const $btn = document.createElement('button');
        $btn.classList.add('button');
        $btn.innerText = item.name;
        const btnCount = countBtn(item.maxCount, $btn);
        $btn.addEventListener('click', () => {
            btnCount();
            play2();
            player1.changeHP($btn, random(item.maxDamage, item.minDamage), function (count) {
                console.log('Some change after change HP', count);
                generateLog(player1, player2, count);
            });
            player2.changeHP($btn, random(player2.attacks[0].maxDamage, player2.attacks[0].minDamage), function (count) {
                console.log('Some change after change HP', count);
                generateLog(player2, player1, count);
            });
        })
        $control.appendChild($btn);
    });
}

export {showButtons, $getElById};


