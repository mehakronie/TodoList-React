import React from "react";
import { useContext } from "react";
export const Todocontext = React.createContext({
    todos:[{
        id:1,
        todomsg:'',
        complete:false
    }],
    addtodo:(todo)=>{},
    deletetodo:(id)=>{},
    updatetodo:(id,todo)=>{},
    toggle:(id)=>{}
}) 
export const Todoprovider = Todocontext.Provider
export const usetodo=()=>{
    return useContext(Todocontext)
} 