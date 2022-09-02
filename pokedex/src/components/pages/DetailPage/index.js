import React from  'react';
import { usePages } from '../../hooks/usePages'

function DetailPage() {

    const {goToHome, goToPokedex} = usePages();

    return (
        <div>
            <div>DetailPage</div>

            <button onClick={goToHome}>Home</button>
            <button onClick={goToPokedex}>Pokedex</button>
        </div>
    )
}

export default DetailPage;