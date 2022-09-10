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

    const Card = () =>{
        if(pokedex && pokedex){ 
                return (<Card
                    // image={pokedex.sprites.other.dream_world.front_default}
                    name={pokedex.name}
                    // type={pokedex.types[0].type.name}
                    />)
            }else{ 
                <p>Algo deu errado</p>
             }
        
    }
    console.log(idPokemon)
    console.log(getPokedex)


    return (
        <div className="app-container">
            <h1>Pokedex</h1>

 
            <Card> 
            <p> {pokedex.name} </p>
            </Card>

                 <div>
                {/* {pokedex && pokedex && <Card
                image={pokedex.sprites.other.dream_world.front_default}
                name={pokedex.name}
                type={pokedex.types[0].type.name}
                />} */}
                {/* //  {pokedex && Card} */}
                <button onClick={() => removePokemon(pokedex)} >Remover</button>
                </div>

                <button className="go"  onClick={() => goToDetailPage(navigate)}>DetailPage</button>
                <button className="go"  onClick={() => goToHome(navigate)}>Home</button>
        </div>
    )
}

export default Pokedex;