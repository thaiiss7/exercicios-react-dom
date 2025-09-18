import { useParams, Link, useNavigate } from "react-router-dom"

export const Users = () => {

    const navigate = useNavigate()

    const handleNavigate = () => {
        console.log("Navegar")
        navigate('/')
    }

    const users = [1,2,3,4]

    return (
        <>
        <div>
            <h1>Lista de Usuários</h1>
            <ul>
                {users.map((id) => (
                    <li key={id}>
                        <Link to={`/userlist/${id}`}>Usuário {id}</Link>
                    </li>
                ))}
            </ul>
            <button onClick={handleNavigate}>Clique para ir para Home</button>
        </div>
        </>
    )
}