const pokemonImage = document.getElementById("js--pokemon--image");
let randomNumber = Math.floor(Math.random() * 250 + 1);

let pokemon = fetch("https://pokeapi.co/api/v2/pokemon/" + randomNumber)
  .then(function (response) {
    return response.json();
  })
  .then(function (realData) {
    pokemonImage.src = realData.sprites.front_default;
  });

const catchButton = document.getElementById("js--catch-button");
const pokemonText = document.getElementById("js--pokemon-text");
let pokemonGamePlayed = false;

catchButton.onclick = function () {
  let catchNumber = Math.floor(Math.random() * 2);
  if (pokemonGamePlayed === false) {
    if (catchNumber === 0) {
      pokemonText.innerText = "Pokemon Fled!";
    } else {
      pokemonText.innerText = "Pokemon Caught!";
    }
    pokemonGamePlayed = true;
  }
};

const title = document.getElementById("js--titel");
const text = document.getElementById("js--paragraph");

let theBoys = fetch("https://api.tvmaze.com/search/shows?q=The%20Boys")
  .then(function (response) {
    return response.json();
  })
  .then(function (realdata) {
    title.innerText = realdata[0].show.name;
  });

let theBoys2 = fetch("https://api.tvmaze.com/search/shows?q=The%20Boys")
  .then(function (response) {
    return response.json();
  })
  .then(function (realdata) {
    text.innerHTML = realdata[0].show.summary;
  });


const nameText = document.getElementById("js--name");
const inputField = document.getElementById("js--input");
inputField.onkeyup = function (event) {
  if (event.keyCode === 13) {
    let name = inputField.value;

    let age = fetch("https://api.agify.io?name=" + name)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonData) {
        inputField.style.display = "none";
        nameText.innerText = (jsonData.age);
      });
  }
}

//* Chart.js*//


const labels = [
  "Smartphone",
  "Gaming Pc",
  "Laptop",
  "Ps5",
  "Tv",
];

const data = {
  labels: labels,
  datasets: [
    {
      label: "Hours I spend on devices per week",
      data: [70000, 50000, 60000, 10000, 20000],
      backgroundColor: ["#FF6B6B", "#FFD93D", "#6BCB77", "#4D96FF", "#F473B9"],
    },
  ],
};

const config = {
  type: "doughnut",
  data: data,
};


new Chart(document.getElementById("js--chart--1"), config);

function getPokemon() {
  let normal = 0,
    fighting = 0,
    flying = 0,
    poison = 0,
    ground = 0,
    rock = 0,
    bug = 0,
    ghost = 0,
    steel = 0,
    fire = 0,
    water = 0,
    grass = 0,
    electric = 0,
    psychic = 0,
    ice = 0,
    dragon = 0,
    dark = 0,
    fairy = 0,
    unknown = 0,
    shadow = 0;

  const labels = [
    "normal",
    "fighting",
    "flying",
    "poison",
    "ground",
    "rock",
    "bug",
    "ghost",
    "steel",
    "fire",
    "water",
    "grass",
    "electric",
    "psychic",
    "ice",
    "dragon",
    "dark",
    "fairy",
    "unknown",
    "shadow",
  ];
  for (i = 0; i < 10; i++) {
    let random = Math.floor(Math.random() * 500 + 1);
    let pokemon = fetch("https://pokeapi.co/api/v2/pokemon/" + random)
      .then(function (response) {
        return response.json();
      })
      .then(function (pokemon) {
        switch (pokemon.types[0].type.name) {
          case "normal":
            normal = normal + 1;
            break;
          case "fighting":
            fighting = fighting + 1;
            break;
          case "flying":
            flying = flying + 1;
            break;
          case "poison":
            poison = poison + 1;
            break;
          case "ground":
            ground = ground + 1;
            break;
          case "rock":
            rock = rock + 1;
            break;
          case "bug":
            bug = bug + 1;
            break;
          case "ghost":
            ghost = ghost + 1;
            break;
          case "steel":
            steel = steel + 1;
            break;
          case "fire":
            fire = fire + 1;
            break;
          case "water":
            water = water + 1;
            break;
          case "grass":
            grass = grass + 1;
            break;
          case "electric":
            electric = electric + 1;
            break;
          case "psychic":
            psychic = psychic + 1;
            break;
          case "ice":
            ice = ice + 1;
            break;
          case "dragon":
            dragon = dragon + 1;
            break;
          case "dark":
            dark = dark + 1;
            break;
          case "fairy":
            fairy = fairy + 1;
            break;
          case "unknown":
            unknown = unknown + 1;
            break;
          case "shadow":
            shadow = shadow + 1;
            break;
        }
      }).then(function(){
        dataPokemon.datasets[0].data = [
          normal,
          fighting,
          flying,
          poison,
          ground,
          rock,
          bug,
          ghost,
          steel,
          fire,
          water,
          grass,
          electric,
          psychic,
          ice,
          dragon,
          dark,
          fairy,
          unknown,
          shadow,
        ];
        graph.update();
      });
  }

  const dataPokemon = {
    labels: labels,
    datasets: [
      {
        label: "Pokemon types",
        data: [
          normal,
          fighting,
          flying,
          poison,
          ground,
          rock,
          bug,
          ghost,
          steel,
          fire,
          water,
          grass,
          electric,
          psychic,
          ice,
          dragon,
          dark,
          fairy,
          unknown,
          shadow,
        ],
        backgroundColor: [
          "#FF6B6B",
          "#FFD93D",
          "#6BCB77",
          "#4D96FF",
          "#F473B9",
        ],
      }
    ]
  }
  const configPokemon = {
    type: "line",
    data: dataPokemon,
  };

 const graph = new Chart(document.getElementById("js--chart--2"), configPokemon);

}

getPokemon();

const label2 = [
  "Elden Ring",
  "Hogwarts Legacy",
  "Valorant",
  "Call of duty warzone",
  "Cyberpunk 2077",
];

const data3 = {
  labels: label2,
  datasets: [
    {
      label: "Most played games in hours",
      data: [70000, 50000, 60000, 10000, 20000],
      backgroundColor: ["#FF6B6B", "#FFD93D", "#6BCB77", "#4D96FF", "#F473B9"],
    },
  ],
};

const config3 = {
  type: "bar",
  data: data3,
};


new Chart(document.getElementById("js--chart--3"), config3);

