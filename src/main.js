import Game from "./game.js";
const game = new Game();

function $getElById(id) {
    return document.getElementById(id);
}

const $control = document.querySelector('.control');
const $startBtn = document.createElement('button');
$startBtn.classList.add('button');
$startBtn.innerText = 'Start Game!';
$control.appendChild($startBtn);

$startBtn.addEventListener("click", () => {
    game.start();
    $startBtn.remove();
})

export {$getElById, $control, game};


