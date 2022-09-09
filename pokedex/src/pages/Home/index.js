import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import {goToDetailPage, goToPokedex} from '../../routes/coordinator'

function Home() {

    const navigate = useNavigate()

    useEffect(() => {
        getAllPokemons()
    }, [])

    const [allPokemons, setAllPokemons] = useState([])
    const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')

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


    const Rend = ({ id, image, name, type}) => {
        const style = type + " thumb-container";
        return (
            <div className={style}>
                <div className="number"><small>#0{id}</small></div>
                <img src={image} alt={name} />
                <div className="detalhe">
                    <h3>{name}</h3>
                    <small>Type: {type}</small>
                    <button>adicionar</button>
                    <button onClick={() => pokemonDetail(id)} >detalhes</button>
                </div>
            </div>
        );
    }
    
    const pokemonDetail = (id) => {
        goToDetailPage(navigate, id)
    }

    return (
        <div>
            <div>Home</div>
            <div className="app-container">
                {/*<button>voltar</button>*/}
                <h1>Lista de Pokémons</h1>
                <div className="pokemon-container">
                    <div className="todos-container">
                        {allPokemons.map((pokemonStats, index) =>
                            <Rend
                                key={index}
                                id={pokemonStats.id}
                                image={pokemonStats.sprites.other.dream_world.front_default}
                                name={pokemonStats.name}
                                type={pokemonStats.types[0].type.name}
                            />)}
                    </div>
                    <button className="carregar" onClick={() => getAllPokemons()}>Carregando..</button>
                </div>
            </div>

            <button onClick={() => goToDetailPage(navigate)}>DetailPage</button>
            <button onClick={() => goToPokedex(navigate)}>Pokedex</button>
        </div>
    )
}

export default Home;