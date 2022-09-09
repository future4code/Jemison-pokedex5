import axios from 'axios';
import React, { useEffect, useState, useContext } from  'react';
import GlobalStateContext from '../../context/GlobalContext';
import { useNavigate } from 'react-router-dom'
import {goToHome, goToDetailPage} from '../../routes/coordinator'

function Pokedex() {

    const navigate = useNavigate()

    const  {
        pokedex,
        setPokedex,
        idPokemon,
        setIdPokemon,
        removePokemon
    } = useContext(GlobalStateContext);
    

    useEffect(() => {
        getPokedex()
    }, [idPokemon])

    const getPokedex = () =>{
        axios
          .get(`https://pokeapi.co/api/v2/pokemon/${idPokemon}/`)
          .then((response) => {
            setPokedex(response.data);
          })
          .catch((error) => {
            console.log("Algo deu errado", error);
          });
    }

    const Card = ({image, name, type}) =>{
        if(pokedex && pokedex){ 
                <div>
                <img src={image} alt={name} />
                <h3>{name}</h3>
                <p>Type: {type}</p>
                </div>
            }else if(pokedex && pokedex === 0){ 
                <p>Algo deu errado</p>
             }
    }
    console.log(idPokemon)
    console.log(getPokedex)


    return (
        <div className="app-container">
            <h1>Pokedex</h1>
                <div>
                    <div className="pokemon-container">
                        <div className="all-container">
                        <Card
                            image={pokedex.sprites.other.dream_world.front_default}
                            name={pokedex.name}
                            type={pokedex.types[0].type.name}
                            />
                        </div>   
                            <button onClick={() => removePokemon(pokedex)} >Remover</button>
                    </div>
                </div>

                <button className="go"  onClick={() => goToDetailPage(navigate)}>DetailPage</button>
                <button className="go"  onClick={() => goToHome(navigate)}>Home</button>
        </div>
    )
}

export default Pokedex;