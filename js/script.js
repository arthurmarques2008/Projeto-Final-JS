const mario = document.querySelector('.mario');
const tubo = document.querySelector('.tubo');
const nuvem = document.querySelector('.nuvem');
const jump = () => {
    mario.classList.add('pulo');

    setTimeout(() => {
        mario.classList.remove('pulo');
    }, 500);
}

const loop = setInterval(() => {
    const posicaomario = +window.getComputedStyle(mario).bottom.replace('px', '');
    const posicaotubo = tubo.offsetLeft;
    const posicaonuvem = +window.getComputedStyle(nuvem).right.replace('px', '');
    
    if (posicaotubo <= 120 && posicaomario < 110 && posicaotubo > 0){
        tubo.style.animation = 'none';
        tubo.style.left = `${posicaotubo}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${posicaomario}px`;

        nuvem.style.animation = 'none';
        nuvem.style.right = `${posicaonuvem}px`;

        mario.src = "images/game-over.png";
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        clearInterval(loop);

        setTimeout(() => {
            if (confirm("Game Over! Deseja reiniciar?")) {
                location.reload(); 
            }
        }, 100);
    }
}, 10);

document.addEventListener("keydown", jump)

