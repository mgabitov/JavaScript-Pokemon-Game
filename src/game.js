import {countBtn, generateLog, random} from "./utils";
import Pokemon from "./pokemon";
import {$getElById, $control, game} from "./main";

function play2() {
    let audio = new Audio('./assets/mk3-00225.mp3');
    audio.play();
}

class Game {
    getPokemons = async () => {
        const apiResponse = await fetch('https://reactmarathon-api.netlify.app/api/pokemons');
        return await apiResponse.json();
    }

    getFightDamage = async (id_player1, id_player, id_attack) => {
        const fightApiResponse = await fetch(`https://reactmarathon-api.netlify.app/api/fight?player1id=${id_player1}&attackId=${id_attack}&player2id=${id_player}`);
        return await fightApiResponse.json();
    }

    start = async () => {
        const pokemons = await this.getPokemons();
        console.log(pokemons);
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
            $btn.addEventListener('click', async() => {
                const fightDamage = await this.getFightDamage(firstPokemon.id, secondPokemon.id, item.id);
                console.log(fightDamage);
                btnCount();
                play2();
                player1.changeHP($btn, fightDamage.kick.player1, function (count) {
                    console.log('Some change after change HP', count);
                    generateLog(player1, player2, count);
                });
                player2.changeHP($btn, fightDamage.kick.player2, function (count) {
                    console.log('Some change after change HP', count);
                    generateLog(player2, player1, count);
                });
            })
            $control.appendChild($btn);
        });
    }
}

function resetGame() {
    const allButtons = document.querySelectorAll('.control .button');
    allButtons.forEach($item => $item.remove());
    const $control = document.querySelector('.control');
    const $resetBtn = document.createElement('button');
    $resetBtn.classList.add('button');
    $resetBtn.innerText = 'Reset Game';
    $control.appendChild($resetBtn);
    $resetBtn.addEventListener("click", () => {
        const $divLogs = document.querySelector('#logs');
        $divLogs.innerHTML = '';
        game.start();
        $resetBtn.remove();
        $control.innerHTML = '';
    })
}

export {resetGame};
export default Game;