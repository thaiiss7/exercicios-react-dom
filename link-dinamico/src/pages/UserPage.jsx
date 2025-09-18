import { useParams, Link, useNavigate } from "react-router-dom"

export const UserPage = () => {

    const navigate = useNavigate()

    const handleNavigate = () => {
        console.log("Navegar")
        navigate('/')
    }


    const {id} = useParams()

    return (
        <>
        <h1>Usuário {id}</h1>
        <button onClick={handleNavigate}>Clique para ir para Home</button>
        </>
    )
}