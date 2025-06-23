import {Link} from "react-router-dom"
export default function ErrorPage(){
    return <>
    <h1>Looks like this URL doesn't exist!</h1>
    <button><Link to = "/">Home</Link></button></>
    
}