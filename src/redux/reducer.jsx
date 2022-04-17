

const api_reducer=(state=[],{type,payload})=>{

    switch(type){
       case  "GET_DATA":
           return payload
      
           default:return state

    }
    
}