class Selectors {
    constructor(name) {
        this.elHP = document.getElementById(`health-${name}`);
        this.elProgressbar = document.getElementById(`progressbar-${name}`);
    }
}

class Pokemon extends Selectors {
    constructor({name, hp, type, selectors}) {
        super(selectors);

        this.name = name;
        this.hp = {
            current: hp,
            total: hp,
        };
        this.type = type;

        this.renderHP();
    }
    changeHP = ($btn1, $btn2, count, cb) => {
       this.hp.current -= count;

       if (this.hp.current <= 0) {
           this.hp.current = 0;
           alert('Бедный ' + this.name + ' проиграл бой');
           $btn1.disabled = true;
           $btn2.disabled = true;
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
        this.elProgressbar.style.width = (this.damageHP / this.defaultHP) * 100 + '%';
    }
}

export default Pokemon;