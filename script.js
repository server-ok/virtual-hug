const elem = document.getElementById('hug');
const url = 'https://nekos.life/api/v2/img/hug';
fetch(url)
.then((response) => {
    return response.json();
  })
.then((data) => {
    elem.src = data.url;
  })
.then(elem.id = 'hug-loaded');