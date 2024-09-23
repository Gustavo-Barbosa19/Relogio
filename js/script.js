const clock = document.querySelector('.time');

function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2,   
 '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    clock.textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateTime,   
 1000); // Atualiza a cada 1000 milissegundos (1 segundo)