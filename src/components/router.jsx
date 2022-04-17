import {Routes,Route} from "react-router-dom"
import { Navbar } from "./Navbar"
import {Signup,Login} from "./Signup"


export const Router=()=>{
    <>
    <Navbar />
    
    <Routes>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/login" element={<Login />}/>
    </Routes>
    </>
    
    

}