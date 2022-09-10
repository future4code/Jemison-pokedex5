import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import GlobalStateContext from '../../context/GlobalContext';
import { goToDetailPage, goToPokedex } from '../../routes/coordinator';
import {  Title, Pokemon, All, Load, PokemonImagem } from './styled';


function Home() {
    const navigate = useNavigate()

    //informações vindo do globalStates
    const {
        allPokemons,
        idPokemon,
        getAllPokemons,
        addToPokedex
    } = useContext(GlobalStateContext);

    //renderizando os pokemons
    const Rend = ({ id, image, name, type }) => {

        const style = type + " thumb-container";

        //Renderizando a lista em card
        return (
            <div className={style}>
                <div className="number"><small>Carde Nº{id}</small></div>
                <PokemonImagem><img src={image} alt={name} /></PokemonImagem>
                <div className="detail-wrapper">
                    <h3>{name}</h3>
                    <small>Type: {type}</small>

                    <button onClick={() => addToPokedex({ id, image, name, type })} >adicionar</button>
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
                <Title>Lista de Pokémons <button className="go" onClick={() => goToPokedex(navigate)}>Pokedex</button></Title>
                <Pokemon>
                    <All>
                        {allPokemons.map((pokemonStats, index) =>
                            <Rend
                                key={index}
                                id={pokemonStats.id}
                                image={pokemonStats.sprites.other.dream_world.front_default}
                                name={pokemonStats.name}
                                type={pokemonStats.types[0].type.name}
                            />)}
                    </All>
                    <Load className="load-more" onClick={() => getAllPokemons()}>Carregando..</Load>
                </Pokemon>
            </div>

    );
}

export default Home;