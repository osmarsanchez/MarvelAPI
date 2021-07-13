const app = document.getElementById('app');

const baseURL = 'https://gateway.marvel.com:443/v1/public/characters';
const publicKey = '238283c2f2661ad1c8414b2058fc1826';

window.onload = () => {
    fetch(baseURL + '?ts=1&apikey=' + publicKey + '&hash=a89b74e53c3089a3ab58674314bdb578')
        .then(response => response.json())
        .then(response => {
            let data = response.data.results;
            data.forEach(element => {
                app.innerHTML += `
                    <div class="card" style="width: 18rem;">
                        <img src="${element.thumbnail.path + '.' + element.thumbnail.extension}" class="card-img-top" alt="${element.name}">
                        <div class="card-body">
                            <h5 class="card-title">${element.name}</h5>
                            <p class="card-text">${element.description}</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Cómics: ${element.comics.available}</li>
                            <li class="list-group-item">Series: ${element.series.available}</li>
                            <li class="list-group-item">Historias: ${element.stories.available}</li>
                        </ul>
                        <div class="card-body">
                            <a href="${element.urls[1].url}" target="_blank" class="card-link">Wiki</a>
                        </div>
                    </div>
                `;
                console.log(element);
            });
        });
}