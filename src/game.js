import {showButtons} from "./main.js";

function resetGame() {
    const allButtons = document.querySelectorAll('.control .button');
    allButtons.forEach($item => $item.remove());
    const $control = document.querySelector('.control');
    const $resetBtn = document.createElement('button');
    $resetBtn.classList.add('button');
    $resetBtn.innerText = 'Reset';
    $control.appendChild($resetBtn);
    $resetBtn.addEventListener("click", () => {
        const $divLogs = document.querySelector('#logs');
        $divLogs.innerHTML = '';
        showButtons();
        $resetBtn.remove();
    })
}

export {resetGame};