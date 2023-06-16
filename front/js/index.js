const api = 'http://localhost:3000/game/'

const list = document.getElementById('containerListTeams');

function cardTeamGet(item) {
  return `
  
    <li class="teamItem">
      <div class="imageTeam">
        <img src="./assets/team/team1.webp" alt="">
      </div>

      <div class="contentTeam">
        <h1>${item.name}</h1>

        <div class="informationTeam">
          <span>${item.type}</span>
          <span>${item.year}</span>
        </div>

      </div>
    </li>
  
  
  
  `
}


// try {

//   fetch(api)
//     .then((response) => response.json())
//     .then((data) => data.teams)
//     .then((teams) => {
//       teams.map((team) => {
//         list.innerHTML += cardTeamGet(team)
//       })
//     })



// } catch (err) {
//   console.error(err + "a")

//   list.innerHTML = '<h1>Houve um error na lista dos times</h1>'
// }

fetch(api)
  .then((response) => response.json())
  .then((data) => {
    if (data && data.teams && data.teams.length > 0) {
      data.teams.forEach((team) => {
        list.innerHTML += cardTeamGet(team);
      });
    } else {
      list.innerHTML = '<h1>Não foram encontrados times disponíveis.</h1>';
    }
  })
  .catch((err) => {
    console.error(err);
    list.innerHTML = '<h1>Ocorreu um erro ao obter a lista dos times.</h1>';
  });