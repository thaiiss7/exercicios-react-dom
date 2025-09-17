import { useNavigate } from "react-router-dom"

export const About = () => {

    const navigate = useNavigate()

    const handleNavigate = () => {
        console.log("Navegar")
        navigate('/')
    }

    return (
        <>
        <h1>About</h1>
        {/* <button onClick={() => navigate('/')}>Clique para navegar para Home</button> */}
        <button onClick={handleNavigate}>Clique para navegar para Home</button>
        </>
    )
}