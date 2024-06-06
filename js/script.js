// scripts.js

// Função para formatar a data no formato DD/MM/YYYY
function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Janeiro é 0!
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

// Define a data atual na seção de aviso
document.getElementById('current-date').textContent = formatDate(new Date());

const muteOverlay = document.getElementById('mute-overlay');
const video = document.getElementById('video');
const viewerCountElement = document.getElementById('viewer-count');

// Função para variar o número de espectadores
function updateViewerCount() {
    let currentCount = parseInt(viewerCountElement.textContent, 10);
    let change = Math.floor(Math.random() * 4) - 2; // Valor entre -2 e 2
    currentCount += change;
    if (currentCount < 650) {
        currentCount = 650;
    } else if (currentCount > 720) {
        currentCount = 720;
    }
    viewerCountElement.textContent = currentCount;
}

// Atualiza o número de espectadores a cada 3 segundos
setInterval(updateViewerCount, 2000);

// Verifica se o usuário já começou a assistir o vídeo
if (localStorage.getItem('videoStarted')) {
    document.getElementById('return-message').style.display = 'block';
    document.getElementById('video-container').style.display = 'none';
} else {
    muteOverlay.style.display = 'flex'; // Exibe o overlay de mute se o vídeo não foi assistido
}

// Manipula o clique no overlay de mute
muteOverlay.addEventListener('click', function() {
    video.muted = false;
    video.play(); // Começar a reproduzir o vídeo
    this.style.display = 'none'; // Esconder o overlay
    localStorage.setItem('videoStarted', 'true'); // Marca que o vídeo foi iniciado
});

// Manipula o botão de continuar assistindo
document.getElementById('continue-watching').addEventListener('click', function() {
    document.getElementById('return-message').style.display = 'none';
    document.getElementById('video-container').style.display = 'block';
    document.getElementById('mute-overlay').style.display = 'none';
    video.play(); // Continuar a reprodução do vídeo
    video.muted = false;
});

// Manipula o botão de assistir do início
document.getElementById('start-over').addEventListener('click', function() {
    document.getElementById('return-message').style.display = 'none';
    document.getElementById('video-container').style.display = 'block';
    const video = document.getElementById('video');
    video.currentTime = 0; // Recomeçar o vídeo do início
    video.play(); // Reproduzir o vídeo
});

document.getElementById('acquire-license-button').addEventListener('click', function() {
    window.location.href = 'https://pay.hotmart.com/X93432140A';
});