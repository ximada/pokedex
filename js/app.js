const galleryPoke = document.getElementById('gallery-poke');

const datapokemon = jsonData => {
    const pokemon = jsonData.results;
    printPokeData(pokemon)
    pokedexPrintInfo(pokemon)
}

$.ajax({
    url: `https://pokeapi.co/api/v2/pokemon-form/`
}).done(datapokemon)

const printPokeData = jsonData => {
    console.log(jsonData);
}

const pokedexPrintInfo = pokeName => { pokeName.forEach(pokemon => {
    const name = pokemon.name
   // console.log(name);
    const createPokemon =`<div class='post text-center'> 
                           <div class='img-post'>
                           <img src ="../assets/images/pokemon3.jpg" style="width:50%; border-radius:10%;"/>
                           </div>
                           <div class="post-content">
                               <h3 class="pokemon-name">${name}</h3>
                                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#poke-info" style="color:white; width:40%;">
                                  More Info...
                                </button>
                          </div>
                         </div>`;
                        

                const containerPokedex = document.createElement("div");
                //containerPokedex.classList.add('col');
                containerPokedex.classList.add('d-inline');
                containerPokedex.classList.add('m-1')
                containerPokedex.innerHTML= createPokemon;
                galleryPoke.appendChild(containerPokedex);

    $.ajax({
        url: `https://pokeapi.co/api/v2/pokemon-form/1`
    }).done(datapokemon)
});}

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







