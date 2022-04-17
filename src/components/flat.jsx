import "./flat.css"
import axios from "axios"
import {useState,useEffect} from "react"
import {useSelector,useDispatch} from "react-redux"


export const Flat=()=>{
    const [flat,setFlat]=useState([])
    const dispatch=useDispatch()

    const data=useSelector((e)=>console.log(e))
    useEffect(()=>{
        getdata()
    },[])


    const getdata=()=>{
       axios.get("https://backendthis.herokuapp.com/flat").then((res)=>{
            console.log(res.data)
           setFlat(res.data)
           
       })
    }
    


    return(
        <div className="container">
            <div className="filter"></div>
            <div className="details">
                <div className="template">
                    <p>Block</p>
                    <p>Flat no.</p>
                    <p>Type</p>
                    <p>No.of Residents</p>
                    <p>Image</p>
                </div>

                {
                    flat.map((e)=>{

                        return(
                            <div className="flats">
                            <div className="flats_detail">{e.block}</div>
                            <div className="flats_detail">{e.flat_number}</div>
                            <div className="flats_detail">{e.type}</div>
                            <div className="flats_detail">3</div>
                            <div className="flats_detail"><img src={e.image}></img></div>
                        </div>
                    
                
                        )
                    })
                }
                </div>
                </div>
               
    )
}