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
    const $divLogs = document.querySelector('#logs');
    const $p = document.createElement('p');
    $p.innerText = logs[random(logs.length) - 1];
    $divLogs.insertBefore($p, $divLogs.children[0]);
}

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

export {random, generateLog, countBtn};