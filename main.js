function $getElById(id) {
    return document.getElementById(id);
}

const $btn = $getElById('btn-kick');
const $superbtn = $getElById('btn-superkick');
let superKickCounter = 0;
let thunderJolt = 0;
const superKickMaxCounter = 4; //максимальное количество использований кнопки SuoerKick
const kickMaxCounter = 9; //максимальное количество использований кнопки Kick

const character = {
    name: 'Pickachu',
    defaultHP: 150,
    damageHP: 150,
    elHP: $getElById('health-character'),
    elProgressbar: $getElById('progressbar-character'),
    renderHP,
    changeHP,
    renderHPLife,
    renderProgressbarHP,
}

const enemy = {
    name: 'Charmander',
    defaultHP: 150,
    damageHP: 150,
    elHP: $getElById('health-enemy'),
    elProgressbar: $getElById('progressbar-enemy'),
    renderHP,
    changeHP,
    renderHPLife,
   renderProgressbarHP,
}

function makeCounter() {
    let currentCount = 1;
    return function () {
        return currentCount++;
    }
}

let kickCounter = makeCounter();
let superCounter = makeCounter();

$btn.addEventListener('click', function () {
    console.log('Kick');
    thunderJolt = kickCounter();
    if (thunderJolt <=kickMaxCounter) {
        character.changeHP(random(20));
        enemy.changeHP(random(20));
        console.log('Количество совершенных ударов:' + thunderJolt);
        document.getElementById("joltNumber").innerHTML = `[${kickMaxCounter - thunderJolt}]`;
    }
    else {
        $btn.disabled = true;
    }
})

$superbtn.addEventListener('click', function () {
   superKickCounter = superCounter();
   console.log(superKickCounter);
    if (superKickCounter <= superKickMaxCounter) {
        console.log('Super-Kick');
        character.changeHP(random(50));
        enemy.changeHP(random(50));
        console.log('Количество совершенных суперударов:' + superKickCounter);
        document.getElementById("countNumber").innerHTML = `[${superKickMaxCounter - superKickCounter}]`;
    }
    else {
        $superbtn.disabled = true;
    }
})

function init() {
    console.log('Start Game!');
    character.renderHP();
    enemy.renderHP();
}

function renderHP() {
    this.renderHPLife();
    this.renderProgressbarHP();
}

function renderHPLife() {
    this.elHP.innerText = this.damageHP + ' / ' + this.defaultHP;
}

function renderProgressbarHP() {
    this.elProgressbar.style.width = (this.damageHP / this.defaultHP) * 100 + '%';
}

function changeHP(count) {
    this.damageHP -= count;
    const log = this === enemy ? generateLog(this, character, count) : generateLog(this, enemy, count);
    const $divLogs = document.querySelector('#logs');
    const $p = document.createElement('p');
    $p.innerText = log;
    $divLogs.insertBefore($p, $divLogs.children[0]);

    if (this.damageHP < count) {
        this.damageHP = 0;
        alert('Бедный ' + this.name + ' проиграл бой');
        $btn.disabled = true;
        $superbtn.disabled = true;
    }
    this.renderHP();
}

function random(num) {
    return Math.ceil(Math.random() * num);
}
function generateLog(firstPerson, secondPerson , count) {
    const {name, damageHP, defaultHP} = firstPerson;
    const {name: nameEnemy} = secondPerson;
    const logs = [
        `${name} вспомнил что-то важное, но неожиданно ${nameEnemy}, не помня себя от испуга, ударил в предплечье врага. Урон составил -${count}, ${damageHP} / ${defaultHP}`,
        `${name} поперхнулся, и за это ${nameEnemy} с испугу приложил прямой удар коленом в лоб врага. Урон составил -${count}, ${damageHP} / ${defaultHP}`,
        `${name} забылся, но в это время наглый ${nameEnemy}, приняв волевое решение, неслышно подойдя сзади, ударил. Урон составил -${count}, ${damageHP} / ${defaultHP}`,
        `${name} пришел в себя, но неожиданно ${nameEnemy} случайно нанес мощнейший удар. Урон составил -${count}, ${damageHP} / ${defaultHP}`,
        `${name} поперхнулся, но в это время ${nameEnemy} нехотя раздробил кулаком \<вырезанно цензурой\> противника. Урон составил -${count}, ${damageHP} / ${defaultHP}`,
        `${name} удивился, а ${nameEnemy} пошатнувшись влепил подлый удар. Урон составил -${count}, ${damageHP} / ${defaultHP}`,
        `${name} высморкался, но неожиданно ${nameEnemy} провел дробящий удар. Урон составил -${count}, ${damageHP} / ${defaultHP}`,
        `${name} пошатнулся, и внезапно наглый ${nameEnemy} беспричинно ударил в ногу противника. Урон составил -${count}, ${damageHP} / ${defaultHP}`,
        `${name} расстроился, как вдруг, неожиданно ${nameEnemy} случайно влепил стопой в живот соперника. Урон составил -${count}, ${damageHP} / ${defaultHP}`,
        `${name} пытался что-то сказать, но вдруг, неожиданно ${nameEnemy} со скуки, разбил бровь сопернику. Урон составил -${count}, ${damageHP} / ${defaultHP}`
    ];

    return logs[random(logs.length) - 1]
}
init();

