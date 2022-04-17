import logo from './logo.svg';
import './App.css';
import {Router} from "./components/router"
import {Signup,Login} from "./components/Signup"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { Flat } from "./components/flat"
import { Resident } from "./components/Residents"
import { Home } from "./components/home"

function App() {
  return (
    <>
    <Navbar />
    <div className="App">
     
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/flat" element={<Flat/>} />
        <Route path="/resident" element={<Resident/>} />
      </Routes>
      </BrowserRouter>
     
      
     
    </div>
    </>
  );
}

export default App;
