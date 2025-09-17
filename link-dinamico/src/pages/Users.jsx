import { useParams } from "react-router-dom"

const {id} = useParams()
const list = [1,2,3,4]

export const Users = () => {
    return (
        <>
        <h1>Users</h1>
        </>
    )
}