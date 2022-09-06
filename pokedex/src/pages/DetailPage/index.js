import React from  'react';
import { useNavigate } from 'react-router-dom'
import {goToHome, goToPokedex} from '../../routes/coordinator'

function DetailPage() {

    const navigate = useNavigate()

    return (
        <div>
            <div>DetailPage</div>

            <button onClick={() => goToHome(navigate)}>Home</button>
            <button onClick={() => goToPokedex(navigate)}>Pokedex</button>
        </div>
    )
}

export default DetailPage;