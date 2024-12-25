import axios from "axios";
import { useState, useEffect} from "react";


const Service =() => {


    const[data,setData]=useState([]);
        const getUser =()=>{
    axios.get('http://localhost:3001/users')
    .then((res)=>{
        setData(res.data);
           
    }).catch((err)=>{
        console.log(err);
    })
    
}

useEffect(()=>{
        getUser();

},[])

return(
    <div>
        {data.map((item,index)=>(
            <h1>{item.name}</h1>
        ))

        }
    </div>
)
}
export default Service;
