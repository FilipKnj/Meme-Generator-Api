const url = `https://meme-api.com/gimme`;
const img = document.querySelector('img');
const btn = document.querySelector('button');
const title = document.querySelector('h3');


const getMeme = () => {
    fetch(url).then(res => res.json()).then(data => {
        img.setAttribute('src', `${data.preview[2]}`);
        title.innerText = `${data.title}`;
    })
}

btn.addEventListener('click',getMeme);
window.addEventListener('load',getMeme);