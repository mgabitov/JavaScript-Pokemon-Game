import Pokemon from "./pokemon.js";

const player1 = new Pokemon({
    name: 'Pikachu',
    type: 'electric',
    hp: 100,
    selectors: 'character',
})

const player2 = new Pokemon({
    name: 'Charmander',
    type: 'fire',
    hp: 120,
    selectors: 'enemy',
})
console.log('TEST')
console.log(player1);
console.log(player2);

function $getElById(id) {
    return document.getElementById(id);
}

const $btn = $getElById('btn-kick');
const $superbtn = $getElById('btn-superkick');

const btnCountJolt = countBtn(15, $btn);
const superBtn = countBtn(5, $superbtn);

$btn.addEventListener('click', function () {
        btnCountJolt();
        player1.changeHP($superbtn, $btn, random(40,20), function (count) {
            console.log('Some change after change HP' , count);
            console.log(generateLog(player1, player2, count));
        });
        player2.changeHP($superbtn, $btn, random(40, 20), function (count) {
            console.log('Some change after change HP' , count);
            console.log(generateLog(player2, player1, count));
        });
})

$superbtn.addEventListener('click', function () {
        superBtn();
        player1.changeHP($superbtn, $btn, random(70,20), function (count) {
            console.log('Some change after change HP', count);
            console.log(generateLog(player1, player2, count));
        });
        player2.changeHP($superbtn, $btn, random(70, 20), function (count) {
            console.log('Some change after change HP', count);
            console.log(generateLog(player2, player1, count));
        });
})

function countBtn(count = 6, el) {
    const innerText = el.innerText;
    el.innerText = `${innerText} [${count}]`;
    return function () {
        count--;
        if (count === 0){
            el.disabled = true;
        }
        el.innerText = `${innerText} [${count}]`;
        return count;
    }
}

// function changeHP(count) {
//     this.hp.current -= count;
//     const log = this === player2 ? generateLog(player2, player1, count) : generateLog(player1, player2, count);
//     const $divLogs = document.querySelector('#logs');
//     const $p = document.createElement('p');
//     $p.innerText = log;
//     $divLogs.insertBefore($p, $divLogs.children[0]);
//
//     if (this.hp.current <= 0) {
//         this.hp.current = 0;
//         alert('Бедный ' + this.name + ' проиграл бой');
//         $btn.disabled = true;
//         $superbtn.disabled = true;
//     }
//     this.renderHP();
// }

function random(max, min = 0) {
    const num = max - min;
    return Math.ceil(Math.random() * num);
}
function generateLog(player1, player2, count) {
    const {name, hp: {current, total}} = player1;
    const {name: enemyName} = player2;
    const logs = [
        `${name} вспомнил что-то важное, но неожиданно ${enemyName}, не помня себя от испуга, ударил в предплечье врага. Урон составил -${count}, [ ${current} / ${total} ]`,
        `${name} поперхнулся, и за это ${enemyName} с испугу приложил прямой удар коленом в лоб врага. Урон составил -${count}, [ ${current} / ${total} ]`,
        `${name} забылся, но в это время наглый ${enemyName}, приняв волевое решение, неслышно подойдя сзади, ударил. Урон составил -${count}, [ ${current} / ${total} ]`,
        `${name} пришел в себя, но неожиданно ${enemyName} случайно нанес мощнейший удар. Урон составил -${count}, [ ${current} / ${total} ]`,
        `${name} поперхнулся, но в это время ${enemyName} нехотя раздробил кулаком \<вырезанно цензурой\> противника. Урон составил -${count}, [ ${current} / ${total} ]`,
        `${name} удивился, а ${enemyName} пошатнувшись влепил подлый удар. Урон составил -${count}, [ ${current} / ${total} ]`,
        `${name} высморкался, но неожиданно ${enemyName} провел дробящий удар. Урон составил -${count}, [ ${current} / ${total} ]`,
        `${name} пошатнулся, и внезапно наглый ${enemyName} беспричинно ударил в ногу противника. Урон составил -${count}, [ ${current} / ${total} ]`,
        `${name} расстроился, как вдруг, неожиданно ${enemyName} случайно влепил стопой в живот соперника. Урон составил -${count}, [ ${current} / ${total} ]`,
        `${name} пытался что-то сказать, но вдруг, неожиданно ${enemyName} со скуки, разбил бровь сопернику. Урон составил -${count}, [ ${current} / ${total} ]`
    ];

    return logs[random(logs.length) - 1]
}

