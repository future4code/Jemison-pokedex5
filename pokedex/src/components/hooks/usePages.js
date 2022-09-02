import { useNavigate } from "react-router-dom";

export function usePages(){

    const navigate = useNavigate();

    const goToHome = () => {
        navigate("/")
    }

    const goToPokedex = () => {
        navigate("/pokedex")
    }

    const goToDetailPage = () => {
        navigate("/detailPage")
    }

    return {
        goToHome,
        goToDetailPage,
        goToPokedex,
    }
}