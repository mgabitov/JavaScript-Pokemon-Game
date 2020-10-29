import {resetGame} from "./game.js";
import {$control} from "./main.js";

class Selectors {
    constructor(name) {
        this.elHP = document.getElementById(`health-${name}`);
        this.elProgressbar = document.getElementById(`progressbar-${name}`);
    }
}

class Pokemon extends Selectors {
    constructor({name, hp, type, selectors, attacks = [] }) {
        super(selectors);

        this.name = name;
        this.hp = {
            current: hp,
            total: hp,
        };
        this.type = type;
        this.attacks = attacks;

        this.renderHP();
    }
    changeHP = ($btn, count, cb) => {
       this.hp.current -= count;

       if (this.hp.current <= 0) {
           this.hp.current = 0;
           const $winner = document.createElement('p');
           $winner.classList.add('winner');
           $winner.innerText = 'Бедный ' + this.name + ' проиграл бой!';
           $control.appendChild($winner);
           resetGame();
       }
        this.renderHP();
        cb && cb(count);
    }

    renderHP = () => {
        this.renderHPLife();
        this.renderProgressbarHP();
    }

    renderHPLife = () => {
        const {elHP, hp: {current, total}} = this;
        elHP.innerText = current + ' / ' + total;
    }

    renderProgressbarHP = () => {
        this.elProgressbar.style.width = (this.hp.current / this.hp.total) * 100 + '%';
        if (this.hp.current > 20 && this.hp.current <= 60) {
            this.elProgressbar.className = 'health low';
        }
        else if (this.hp.current <= 20) {
            this.elProgressbar.className = 'health critical';
        }
        else this.elProgressbar.className = 'health';
    }
}

export default Pokemon;