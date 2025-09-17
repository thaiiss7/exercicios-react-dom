import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

export const Products = () => {

    const {category} = useParams()
    const {id} = useParams()

    return (
        <>
        <h1>Category: {category} - Product: {id}</h1>
        <Link to={'/'}>Navegar para Home</Link>
        </>
    )
}