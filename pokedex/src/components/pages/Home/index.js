import React from 'react';
import { usePages } from '../../hooks/usePages'

function Home() {

    const { goToDetailPage, goToPokedex } = usePages();

    return (
        <div>
            <div>Home</div>

            <button onClick={goToDetailPage}>DetailPage</button>
            <button onClick={goToPokedex}>Pokedex</button>
        </div>
    )
}

export default Home;