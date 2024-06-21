function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function createLight() {
    const light = document.createElement('div');
    light.className = 'light';
    light.style.backgroundColor = getRandomColor();
    light.style.top = `${Math.random() * 100}vh`;
    light.style.left = `${Math.random() * 100}vw`;
    light.style.animationDuration = `${Math.random() * 3 + 1}s`;
    light.style.transform = `scale(${Math.random() * 2 + 0.5})`;
    document.getElementById('discoContainer').appendChild(light);
}

function addLights() {
    for (let i = 0; i < 50; i++) {
        createLight();
    }
}

function changeLightColors() {
    const lights = document.getElementsByClassName('light');
    for (let light of lights) {
        light.style.backgroundColor = getRandomColor();
    }
}

function changeBackgroundColor() {
    document.body.style.backgroundColor = getRandomColor();
}

function playBackgroundMusic() {
    const music = document.getElementById('backgroundMusic');
    music.play();
    document.getElementById('playButton').style.display = 'none';
    setInterval(changeLightColors, 500);
    setInterval(changeBackgroundColor, 500);
    addLights();
}

document.getElementById('playButton').addEventListener('click', playBackgroundMusic);
