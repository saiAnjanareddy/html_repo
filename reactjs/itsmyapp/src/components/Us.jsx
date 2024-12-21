/*import {useState} from "react";
function Usestate(){
    let [counter,updateCounter]=useState(10);
    return(
        <div>
            <h2>Initially Counter value is: {counter}</h2>
            <button onClick={()=>updateCounter(++counter)}>Press Me</button>
        </div>
    )

}
export default Usestate  */


import { useEffect, useState } from "react";

function Us(){
    const [city, setCity]=useState("Warangal");
    useEffect(()=>{
        if(city==="Warangal")
            {
                setCity("Telangana");
            }
            else{
                setCity("Chennai");
            }
    },[])    
   
return(
    <div>
        {city}
    </div>
)
}
export default Us;
