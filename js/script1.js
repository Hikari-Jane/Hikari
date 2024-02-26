const loading = document.querySelector('#loading');

const loaded = () => {
    loading.classList.add('loaded')
};

window.addEventListener('load', loaded);

const animation1 = document.querySelector('#animation_1');
const button = document.querySelector('.button');

const keyframes = {
    opacity: [0,1],
    translate: ['0 -100px',0]
}

const keyframes2 = {
    opacity: [0,1],
}

animation1.animate(keyframes, 4000);

button.animate(keyframes2, 4000);

