import React from  'react';
import { useNavigate } from 'react-router-dom'
import {goToHome, goToDetailPage} from '../../routes/coordinator'

function Pokedex() {

    const navigate = useNavigate()

    return (
        <div>
            <div>Pokedex</div>

            <button onClick={() => goToDetailPage(navigate)}>DetailPage</button>
            <button onClick={() => goToHome(navigate)}>Home</button>
        </div>
    )
}

export default Pokedex;