const galleryPoke = document.getElementById('gallery-poke');
const invokePokemon = document.getElementById('invoke-pokemon');
window.addEventListener('load', () => {
    getJson();
});
//Obteniendo y almacenando la data  de https://graphql-pokemon.now.sh/
const getJson = (e)=>{
    if (!localStorage.getItem('data-pokemon')) {
        $.post({
            url: 'https://graphql-pokemon.now.sh/',
            data: JSON.stringify({
                "query": " {pokemons(first: 150){name image weight{minimum maximum}weaknesses types}} " }),
            contentType: 'application/json'
        }).done(function (response) {
            let pokemonsData = ('Fetched Pokemons:', response.data.pokemons);
            localStorage.setItem('data-pokemon', JSON.stringify(pokemonsData));
            printData(localStorage.getItem('data-pokemon'))
        });
    } else {
        printData(localStorage.getItem('data-pokemon'))
    }
    
}

const printData = data => {
    let pokemonsData = JSON.parse(data)
    //console.log(pokemonsData);
    pokemonsData.forEach(element => {
            const createPokemon = `<div class='post text-center'> 
                                  <div class='img-post'>
                                  <img  class="mt-4"src ="${element.image}" style="width:50%; height:20vh; border-radius:10%;"/>                              </div>
                                  <div class="post-content">
                                  <h3 class="pokemon-name">${element.name}</h3>
                                  <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#poke-info" data-id="${element.id}" style="color:#ffcc03; width:60%; background:#356ABD">
                                    More Info...
                                  </button>
                                  </div>
                                  </div>`;
const containerPokedex = document.createElement("div");
    containerPokedex.classList.add('col-lg-3');
    containerPokedex.classList.add('d-inline');
    containerPokedex.classList.add('m-1')
    containerPokedex.innerHTML= createPokemon;
    galleryPoke.appendChild(containerPokedex);      
    });
        
        
}



const filterPokemon = (pokemonsTotal)=>{
    console.log(pokemonsTotal);
    
    let pokeNames = pokemonsTotal.name;
    console.log(pokeNames);
    
    // let inputValue = invokePokemon.value.toLowerCase();
    // console.log(inputValue)
    // let prueba = pokeNames.filter(pokedx => {
    //     return pokedx.name.toLowerCase().indexOf(inputValue) >= 0
    // });
    
 }
invokePokemon.addEventListener('keyup', filterPokemon);
// const datapokemon = jsonData => {
//     const pokemon = jsonData.results;
//     // printPokeData(pokemon)
//     // pokedexPrintInfo(pokemon)
// }

// $.ajax({
//     url: `https://api.pokemontcg.io/v1/cards`
// }).done(datapokemon)

// const printPokeData = jsonData => {
//     console.log(jsonData);
// }

// gif pokeball
const ballEl = document.getElementById("pokeball");
const startTime = new Date().getTime();
const walkTheBall = () => {
    let  currTime = new Date().getTime();
    let newLeft = (20 + ((currTime - startTime) / 300) * 50);
    ballEl.style.left = newLeft + "px";
    window.requestAnimationFrame(walkTheBall)

};
walkTheBall();

// const pokedexPrintInfo = pokeName => { pokeName.forEach(pokemon => {
//     const name = pokemon.name
//    // console.log(name);
//     const createPokemon =`<div class='post text-center'> 
//                            <div class='img-post'>
//                            <img src ="../assets/images/pokemon3.jpg" style="width:50%; border-radius:10%;"/>
//                            </div>
//                            <div class="post-content">
//                                <h3 class="pokemon-name">${name}</h3>
//                                 <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#poke-info" style="color:white; width:40%;">
//                                   More Info...
//                                 </button>
//                           </div>
//                          </div>`;
                        

//                 const containerPokedex = document.createElement("div");
//                 //containerPokedex.classList.add('col');
//                 containerPokedex.classList.add('d-inline');
//                 containerPokedex.classList.add('m-1')
//                 containerPokedex.innerHTML= createPokemon;
//                 galleryPoke.appendChild(containerPokedex);

//     $.ajax({
//         url: `https://pokeapi.co/api/v2/pokemon-form/1`
//     }).done(datapokemon)
// });}

//  function getPokemon(pokemon){
    
//     $.ajax({
//         type: "GET",
//         url: "https://pokeapi.co/api/v2/pokemon-form/",
//         async: true,
//         dataType: "json",
//         success: function (json) {
//             console.log(json);
//             let pokedex = json.pokemon_entries[0].pokemon_species.name;
//             let urlPpkedex = json.pokemon_entries[0].pokemon_species.url;
//             console.log(urlPpkedex);




//             // for (var i = 0; i < event.length; i++) {
//             //     var nameEvent = event[i].name; //nombre del evento
//             //     var infoEvent = event[i].info; //descripcion del evento 
//             //     var datesObject = event[i].dates;
//             //     var dateEvent = datesObject.start.localDate; //fecha del evento
//             //     var timeEvent = datesObject.start.localTime; //hora del evento


//             // }


//         },
//         error: function (xhr, status, err) {
//             // This time, we do not end up here!
//         }


//     });
//      $.ajax({
//          type: "GET",
//          url: 'https://pokeapi.co/api/v2/pokemon-form/1/',
//          async: true,
//          dataType: "json",
//          success: function (json) {
//              console.log(json);
//          },
//          error: function (xhr, status, err) {
//              // This time, we do not end up here!
//          }


//      });

// }
//  getPokemon();







