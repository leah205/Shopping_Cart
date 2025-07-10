import {Link} from "react-router-dom"
import {React} from "react"
export default function ErrorPage(){
    return <>
    <h1 data-testid = "error-message">Looks like this URL doesn't exist!</h1>
    <button><Link to = "/">Home</Link></button></>
    
}