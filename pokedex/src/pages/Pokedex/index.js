import axios from 'axios';
import React, { useEffect, useState, useContext } from  'react';
import GlobalStateContext from '../../context/GlobalContext';
import { useNavigate } from 'react-router-dom'
import {goToHome, goToDetailPage} from '../../routes/coordinator'
import styled from 'styled-components';

function Pokedex() {

    const navigate = useNavigate()

    const  {
        pokedex,
        setPokedex,
        idPokemon,
        setIdPokemon,
        removePokemon,
        allPokemons
    } = useContext(GlobalStateContext);
    

    // useEffect(() => {
    //     getPokedex()
    // }, [])


    // const getPokedex = () =>{
    //     axios
    //       .get(`https://pokeapi.co/api/v2/pokemon/${idPokemon}/`)
    //       .then((response) => {
    //         setPokedex(response.data);
    //       })
    //       .catch((error) => {
    //         console.log("Algo deu errado", error);
    //       });
    // }

    
    // const Card = (id) =>{
    //     if(allPokemons.id === idPokemon){ 
    //             return (<Card
    //                 // image={pokedex.sprites.other.dream_world.front_default}
    //                 name={pokedex.name}
    //                 // type={pokedex.types[0].type.name}
    //                 />)
    //         }else{ 
    //             <p>Algo deu errado</p>
    //          }
        
    // }



    const RendPokedex = ({ id, image, name, type }) => {

        if(allPokemons === idPokemon.length ){ 
        return (
          <div >
              <div className="number"><small>Carde Nº{id}</small></div>
              <img src={image} alt={name} />
              <div className="detail-wrapper">
                  <h3>{name}</h3>
                  <small>Type: {type}</small>
        
                  {/* {botao}
                  <button onClick={() => pokemonDetail(id)} >detalhes</button> */}
              </div>
          </div>
        
        );
        }else{console.log('deu erro')}
    }




    console.log(idPokemon)
    // console.log(getPokedex)


    return (
        <div className="app-container">
            <h1>Pokedex</h1>

            {allPokemons.map((item) => {
          <RendPokedex
        //    key={index}
           id={item.id}
        //    image={item.sprites.other.dream_world.front_default}
           name={item.name}
        //    type={item.types[0].type.name}
         />
        })}

 
            {/* <Card> 
            <p> {pokedex.name} </p>
            </Card>

                 <div>
                {/* {pokedex && pokedex && <Card
                image={pokedex.sprites.other.dream_world.front_default}
                name={pokedex.name}
                type={pokedex.types[0].type.name}
                />} */}
                {/* //  {pokedex && Card} */}
                {/* <button onClick={() => removePokemon(pokedex)} >Remover</button>
                </div>  */}

                <button className="go"  onClick={() => goToDetailPage(navigate)}>DetailPage</button>
                <button className="go"  onClick={() => goToHome(navigate)}>Home</button>
        </div>
    )
}

export default Pokedex;