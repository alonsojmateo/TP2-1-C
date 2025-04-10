

// https://pokeapi.co/api/v2/pokemon?limit=151&offset=0

// Devolver un objeto como respuesta, con el nombre de los pokemons, como llaves

// respuesta = {
//     charmander:{
//         id:
//         name:
//         altura:
//     }
// }

// id, name, height, weight, 
// sprites.other.showdown.front_default

const url = "https://pokeapi.co/api/v2/pokemon"

async function obtenerPokemon(Ids){
    const data = await fetch(`${url}?limit=151&offset=0`)
        .then(res => res.json())
        .then((data) => data.results.filter((_, index) => Ids.includes(index + 1)))
        .catch(err => {
            console.log("Error al obtener 150 pokemones")
            return []
        })

    const promesas = data.map((pokemon, index) => {
        return fetch(pokemon.url)
            .then(res => res.json())
            .catch(err => {
                console.log("Error al obtener pokemon: " + index);
                return null
            } )
    })

    const rawPokemones = await Promise.all(promesas)

    const respuesta = {}

    rawPokemones
        .filter(poke => poke !== null)
        .map((pokemon) => {
            respuesta[pokemon.name] = {
                id: pokemon.id,
                name: pokemon.name,
                height: pokemon.height
            }
    })

    return respuesta;
    // fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
    // Filtren todos esos y quedense con los que tengan los ids correspondientes

    // una vez tengan esos pokemons filtrados, generar la respuesta final

    // / respuesta = {
    //     //     charmander:{
    //     //         id:
    //     //         name:
    //     //         altura:
    //     //     }
    //     // }
}

let ids = [4, 3, 20, 40, 80, 148, 151]

obtenerPokemon(ids)
    .then(resultado => {
        console.log("Resultado: ", resultado);
    })