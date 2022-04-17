import "./signup.css"
import {Link} from "react-router-dom"
import {useState,useEffect} from "react"
import axios from "axios"

export const Signup=()=>{
const [input,setInput]=useState([])

const handlechange=(e)=>{

    const {id,value}=e.target

    setInput({
        ...input,
        [id]:value
    })


}
const handlesubmit=()=>{
     axios.post("https://backendthis.herokuapp.com",{input}).then(()=>{
         alert("you are registered")
     })
}
    


    return(
        <div>
            <input type="text" id="name" className="input" placeholder="Name" onChange={handlechange} ></input>
            <br />
            <input type="text" id="age" className="input" placeholder="age" onChange={handlechange} ></input>
            <br />
            <input type="text" id="gender" className="input" placeholder="gender" onChange={handlechange} ></input>
            <br />
            <input type="text" id="email" className="input" placeholder="Email" onChange={handlechange} ></input>
            <br />
            <input type="password" id="Password" className="input" placeholder="Password" onChange={handlechange} ></input>
            <br />
           <Link to="/login"> <button className="input" onClick={handlesubmit}>Submit</button></Link>
        </div>
    )
}

export const Login=()=>{

    const [data,setData]=useState()
    const handlelogin=(e)=>{

        const {id,value}=e.target
    
        setData({
            ...data,
            [id]:value
        })
    
    
    }
    const handlesubmitlogin=()=>{
        axios.post("https://backendthis.herokuapp.com/email",{data}).then(()=>{
            alert("you are registered")
        })
   }

    return(
        <div>
            <input type="text" id="login_email" className="input" placeholder="Email" onChange={handlelogin}></input>
            <br />
            <input type="password" id="login_Password" className="input" placeholder="Password" onChange={handlelogin} ></input>
            <br />
          <Link to="/flat"> <button className="input" onClick={handlesubmitlogin}>Submit</button></Link> 
        </div>
    )
}

