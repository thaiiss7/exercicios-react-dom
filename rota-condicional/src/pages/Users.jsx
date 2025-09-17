import { useParams } from "react-router-dom"

export const Users = () => {

    const {id} = useParams()

    if (id == 1)
        return (
            <>
            <h1>User Admin</h1>
            </>
        )
    
    return (
        <>
        <h1>User comum</h1>
        </>
    )
}