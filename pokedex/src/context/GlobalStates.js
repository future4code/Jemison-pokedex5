import React, { useEffect, useState } from 'react';
import GlobalStateContext from "./GlobalContext"

function Context(props) {

  //estados
  const [allPokemons, setAllPokemons] = useState([])
  const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')
  const [idPokemon, setIdPokemon] = useState([])
  const [pokedex, setPokedex] = useState([])


  //renderizando a api
  const getAllPokemons = async () => {
    const res = await fetch(loadMore)
    const data = await res.json()

    setLoadMore(data.next)

    function createPokemonObject(results) {
        results.forEach(async pokemon => {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
            const data = await res.json()
            setAllPokemons(currentList => [...currentList, data])
        })
    }
    createPokemonObject(data.results)
    console.log(data.results)
}

useEffect(() => {
  getAllPokemons()
}, [])


// coletando os id para pokedex
const addToPokedex = (id) =>{
  const urlPokedex = [...idPokemon, id ]
  setIdPokemon(urlPokedex)
}

//remove pokemon da pokedex
const removePokemon = (pokemon) => {
  const newPokedex = idPokemon.filter((pokedex) => {
    return pokedex.id !== pokemon.id;
  });
  setIdPokemon(newPokedex);
  alert("Pokemon Removido com Sucesso")
}


  const dados ={
    allPokemons,
    setAllPokemons,
    loadMore,
    setLoadMore,
    idPokemon,
    setIdPokemon,
    getAllPokemons,
    addToPokedex,
    pokedex,
    setPokedex,
    removePokemon
  }

 return (
  <GlobalStateContext.Provider value={dados}>
   {props.children}
  </GlobalStateContext.Provider>
 );
}

export default Context;