import { Link, useNavigate } from "react-router-dom"

export const Home = () => {

    const navigate = useNavigate()

    const handleNavigate = () => {
        console.log("Navegar")
        navigate('/userlist')
    }

    return (
        <>
        <h1>Home</h1>
        <button onClick={handleNavigate}>Clique para ir para Lista de Usuários</button>
        </>
    )
}