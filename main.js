const $btn = document.getElementById('btn-kick');
const $superbtn = document.getElementById('btn-superkick');
let superKickCounter = 0;

const character = {
    name: 'Pickachu',
    defaultHP: 500,
    damageHP: 500,
    elHP: document.getElementById('health-character'),
    elProgressbar: document.getElementById('progressbar-character'),
    renderHP: renderHP,
    changeHP: changeHP,
}

const enemy = {
    name: 'Charmander',
    defaultHP: 500,
    damageHP: 500,
    elHP: document.getElementById('health-enemy'),
    elProgressbar: document.getElementById('progressbar-enemy'),
    renderHP: renderHP,
    changeHP: changeHP,
}

$btn.addEventListener('click', function () {
    console.log('Kick');
    character.changeHP(random(20));
    enemy.changeHP(random(20));
})

$superbtn.addEventListener('click', function () {
    if (superKickCounter === 0) {
        console.log('Super-Kick');
        character.changeHP(random(50));
        enemy.changeHP(random(50));
        $superbtn.disabled = true;
    }
    else {
        $superbtn.disabled = true;
    }
    superKickCounter++;
})

function init() {
    console.log('Start Game!');
    character.renderHP();
    enemy.renderHP();
}

function renderHP() {
    renderHPLife.call(this)
    renderProgressbarHP.call(this);
}

function renderHPLife() {
    this.elHP.innerText = this.damageHP + ' / ' + this.defaultHP;
}

function renderProgressbarHP() {
    this.elProgressbar.style.width = (this.damageHP / this.defaultHP) * 100 + '%';
}

function changeHP(count) {
    if (this.damageHP < count) {
        this.damageHP = 0;
        alert('Бедный ' + this.name + ' проиграл бой');
        $btn.disabled = true;
    }
    else {
        this.damageHP -= count;
    }
    this.renderHP();
}

function random(num) {
    return Math.ceil(Math.random() * num);
}

init();

