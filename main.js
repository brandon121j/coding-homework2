
const counter = document.getElementById('counter');
const subtract = document.getElementById('subtract');
const add = document.getElementById('add');
const starDiv = document.getElementById('stars');

let counterVal = 0;

add.addEventListener('click', () => {
    counterVal++;
    counter.innerHTML = counterVal;
    starDiv.appendChild(stars());
});

subtract.addEventListener('click', () => {
    counterVal--;
    counter.innerHTML = counterVal;
    try {
        starDiv.removeChild(starDiv.lastElementChild)
    } catch(e) {}
});

const stars = () => {
    const appender = document.createElement('div');
    appender.innerHTML = `<img class='star' alt='star image' src='./star.png'/>`;
    return appender
}

