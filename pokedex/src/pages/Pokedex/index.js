import axios from 'axios';
import React, { useEffect, useState, useContext } from  'react';
import GlobalStateContext from '../../context/GlobalContext';
import { useNavigate } from 'react-router-dom'
import {goToHome, goToDetailPage} from '../../routes/coordinator'
import { PokemonImagem } from '../Home/styled';


function Pokedex() {

    const navigate = useNavigate()

    const  {
        pokedex,
        removePokemon,
    } = useContext(GlobalStateContext);
    

    const pokemonDetail = (id) => {
        goToDetailPage(navigate, id)
    }

    const Rend = (pokemon={}) => {

        const style = pokemon.type + " thumb-container";

        //Renderizando a lista em card
        return (
            <div className={style}>
                <div className="number"><small>Carde Nº{pokemon.id}</small></div>
                <PokemonImagem><img src={pokemon.image} alt={pokemon.name} /></PokemonImagem>
                <div className="detail-wrapper">
                    <h3>{pokemon.name}</h3>
                    <small>Type: {pokemon.type}</small>

                    <button onClick={() => removePokemon(pokemon)} >Remover</button>
                    <button onClick={() => pokemonDetail(pokemon.id)} >detalhes</button>
                </div>
            </div>
        );
    }

    const showPokedex = pokedex.map((pokemon) => {
        return (
            <Rend 
            {...pokemon}
            />
        )
    })

    return (
        <div>
            <h1>Pokedex</h1>
                 <div>
                    {showPokedex}
                </div>

                <button onClick={() => goToDetailPage(navigate)}>DetailPage</button>
                <button onClick={() => goToHome(navigate)}>Home</button>
        </div>
    )
}

export default Pokedex;