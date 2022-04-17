import {Link} from "react-router-dom"


export const Navbar=()=>{


    return (
        <div style={{display:"flex",justifyContent:"space-between"}}>
       <a href="/">Home</a>
       <a href="/signup">Signup</a>
        </div>
    )
}