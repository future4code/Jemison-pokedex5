import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { goToDetailPage, goToPokedex } from '../../routes/coordinator';
import { Card, Number, Small, Image, Detail, Button, App, Title, Pokemon, All, Load } from './styled';

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


    const Rend = ({ id, image, name, type }) => {
        const style = type + " Thumb";

        return (
            <Card className={style}>
                <Number className="number"><Small>nº 0{id}</Small></Number>
                <Image src={image} alt={name} />
                <Detail className="detail-wrapper">
                    <h3>{name}</h3>
                    <small>Type: {type}</small>
                    <Button onClick={() => goToPokedex(navigate)}>adicionar</Button>
                    <Button onClick={() => goToDetailPage(navigate)}>detalhes</Button>
                </Detail>
            </Card>
        );
    }

    return (
        <div>
            <App className="app-container">
                <Title>Lista de Pokémons</Title>
                <Pokemon className="pokemon-container">
                    <All className="all-container">
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
            </App>
        </div>
    );
}

export default Home;




