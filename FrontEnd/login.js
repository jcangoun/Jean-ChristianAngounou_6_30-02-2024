let url = 'http://localhost:5678/api//users/login';
fetch(url).then(function(response) {
    return response.json
    .then(function(data) {
        console.log(data)
    }
.catch(error => console.log('Erreur:' + error)))
})
const recup = document.querySelector('#password');
const meteo = recup.innerHTML = data;