import React from  'react';
import { usePages } from '../../hooks/usePages'

function Pokedex() {

    const { goToDetailPage, goToHome} = usePages();

    return (
        <div>
            <div>Pokedex</div>

            <button onClick={goToDetailPage}>DetailPage</button>
            <button onClick={goToHome}>Home</button>
        </div>
    )
}

export default Pokedex;