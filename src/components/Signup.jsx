import React,{useState,useEffect} from "react"
import { useNavigate } from "react-router-dom";

export default function Signup(){
    const[Name,setName]=useState("")

    const[Error,setError]=useState("")
    const navigate=useNavigate()
    function validation(){
        if(Name===""){
            setError("User name can't be empty")
        }
        else if(Name.length<5 || Name.length>=15){
            setError(" Should be minimum 5 and maximum ")
        }
        else{
            setError("")
        }
    }
    useEffect(()=>{
        validation()

    },[Name])
    return(
        <div>
            <input type="text" id="name" autoComplete="off" onChange={(event)=>{
                setName(event.target.value)
            }}/>
            <h4 style={{color:"red"}}>{Error}</h4>
            <button onClick={()=>{
                navigate('/Dashboard')
            }}>Submit</button>

        </div>
    )
}