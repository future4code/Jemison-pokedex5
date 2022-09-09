import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import GlobalStateContext from '../../context/GlobalContext';
import {goToDetailPage, goToPokedex} from '../../routes/coordinator'

function Home() {
    const navigate = useNavigate()
    
    //informações vindo do globalStates
    const  {
        allPokemons,
        idPokemon,
        getAllPokemons,
        addToPokedex
    } = useContext(GlobalStateContext);

    //sere para ver se esta pegando o id para pokedex
    console.log( `Ola ${idPokemon}`) 
    
    //renderizando os pokemons
    const Rend = ({ id, image, name, type}) => {
        const style = type + " thumb-container";
        
        //pegando id com o botao adicionar
        let botao 
        if(idPokemon.find(element => element == id)){
           botao = <button disabled={true} onClick={()=> addToPokedex(id)} >adicionar</button>

        }else{
            botao = <button  onClick={()=> addToPokedex(id)} >adicionar</button>

        }

        //Renderizando a lista em card
        return (
            <div className={style}>
                <div className="number"><small>Carde Nº{id}</small></div>
                <img src={image} alt={name} />
                <div className="detalhe">
                    <h3>{name}</h3>
                    <small>Type: {type}</small>
                    {botao}
                    <button>detalhes</button>
                </div>
            </div>
        );
    }
    
    return (
        <div>
            <div>Home</div>
            <div className="app-container">
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