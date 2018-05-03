const galleryPoke = document.getElementById('gallery-poke');

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
            printData(localStorage.getItem('data-pokemon'));
              
        });
    } else {
        printData(localStorage.getItem('data-pokemon'));
       
    }
    
}

const printData = data => {
    let pokemonsData = JSON.parse(data)
    console.log(pokemonsData);
    pokemonsData.forEach( function(pokemon,index) {
        let idPokm= index +1;
        //console.log(id);
        
        let createPokemon= "";
        createPokemon += `<div class='post text-center lg-10'  > 
                            <div class='img-post'>
                            <img  class="mt-4" src ="${pokemon.image}" style="width:50%; height:20vh; border-radius:10%;"
                            <div/>                              
                            <div class="post-content">
                            <h3 class="pokemon-name">${pokemon.name}</h3>
                            </div>
                            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#poke-info" data-id="${pokemon.id}" data-name="${pokemon.name}"  style="color:#ffcc03; width:60%; background:#356ABD">
                                    More Info...
                                  </button>
                            </div>`;
    $(galleryPoke).append(createPokemon);      
    }); 
    // data - toggle="modal" data - target="#poke-info" data - id="${pokemon.id}"
    
};


$('#poke-info').on('show.bs.modal', function (event){
    let findPokemon = $(event.relatedTarget) // Button that triggered the modal
    let pokemon = JSON.parse(localStorage.getItem('data-pokemon')).find(pokemon =>{
         return pokemon.name === findPokemon.data('name')
     });
     var modal = $(this)
     modal.find('.name-pokemon').text(pokemon.name);
     modal.find('.modal-img').attr('src', pokemon.image);
     modal.find('.poke-types').text(pokemon.types);
     modal.find('.poke-weaknesses').text(pokemon.weaknesses);
     modal.find('.poke-minimum').text(pokemon.weight.minimum);
     modal.find('.poke-maximum').text(pokemon.weight.maximum);     
          
     
     
    
});
//filtro busca pokemon especifico
let invokePokemon = document.getElementById('invoke-pokemon');
const filterPokemon = ()=>{
    let jsonPkmData = JSON.parse(localStorage.getItem('data-pokemon'));
    //console.log(filterPkm);
    let inputValue = invokePokemon.value.toLowerCase();
    //console.log(inputValue);
    let filterPkm = jsonPkmData.filter(pokedx => {
      return pokedx.name.toLowerCase().indexOf(inputValue) >= 0
    });
    //console.log(filterPkm);
    paintPkmFilter(filterPkm);  
 }
invokePokemon.addEventListener('keyup', filterPokemon);

const paintPkmFilter=(filterPkm)=>{
    galleryPoke.innerText ='';
    filterPkm.forEach(pokeSearch=>{
        let templateSearch = `<div class='post text-center'>
                            <div class='img-post'>
                            <img class="mt-4" src="${pokeSearch.image}" style="width:50%; height:20vh; border-radius:10%;"
                            <div/>
                            <div class="post-content">
                            <h3 class="pokemon-name">${pokeSearch.name}</h3>
                            </div>
                            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#poke-info" data-id="${pokeSearch.id}" data-name="${pokeSearch.name}"  style="color:#ffcc03; width:60%; background:#356ABD">
                                    More Info...
                                  </button>
                        </div>`;
        $(galleryPoke).append(templateSearch);    
    });
}

// gif pokeball
// const ballEl = document.getElementById("pokeball");
// const startTime = new Date().getTime();
// const walkTheBall = () => {
//     let  currTime = new Date().getTime();
//     let newLeft = (20 + ((currTime - startTime) / 300) * 50);
//     ballEl.style.left = newLeft + "px";
//     window.requestAnimationFrame(walkTheBall)

// };
// walkTheBall();
// const paintModal=()=>{
//     console.log(event.target.parent);
    
// }

//  $(document).on("click", ".pokemon-name",paintModal)








