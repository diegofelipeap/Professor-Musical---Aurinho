const phrases = [
    'Sonha aprender instrumentos musicais? Eu realizo!',
    'Você já é músico, posso te provar!',
    'Aprenda 2 músicas em uma só aula!'
];

const subtitleElement = document.querySelector('.subtitle');

let currentIndex = 0;

function changePhrase() {
    subtitleElement.classList.add('fade-out');

    setTimeout(() => {
        subtitleElement.innerHTML = `${phrases[currentIndex]} <img width="28" height="28" src="https://img.icons8.com/emoji/48/guitar-emoji.png" alt="guitar-emoji" />`;

        subtitleElement.classList.remove('fade-out');

        currentIndex = (currentIndex + 1) % phrases.length;
    }, 500);
}

setInterval(changePhrase, 2300);

const phrases1 = [
    'MENTORIA MUSICAL',
    'Backing Vocal',
    'Multi-instrumentista',
    'Arranjador',
    'Compositor'
];

const h1Element = document.querySelector('h1');

let currentPhraseIndex = 0;
let currentCharIndex = 0;
let typingSpeed = 100;

function typeWriterEffect() {

    const currentPhrase = phrases1[currentPhraseIndex];
    const staticText = 'Aurinho - ';
    const typewriterText = currentPhrase.slice(0, currentCharIndex);

    h1Element.innerHTML = `<span class="static-text">${staticText}</span><span class="typewriter-text">${typewriterText}</span>`;
    if (currentCharIndex < currentPhrase.length) {
        currentCharIndex++;
        setTimeout(typeWriterEffect, typingSpeed); // Continue typing
    } else {

        setTimeout(() => {
            currentCharIndex = 0;
            currentPhraseIndex = (currentPhraseIndex + 1) % phrases1.length;
            typeWriterEffect();
        }, 1500);
    }
}
typeWriterEffect();
