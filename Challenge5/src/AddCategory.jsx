import React from "react";
import { useState } from "react";

 const AddCategory=({onAddCategory})=>{
    const [inputValue,setinputValue]=useState('')

    const onInputChange= (evt)=>{
        setinputValue(evt.target.value)
    }


    const onSubmit =(evt)=>{
        evt.preventDefault();
        onAddCategory(inputValue);
        setinputValue('')
    }


    return(
        <form onSubmit ={(event) => onSubmit(event)}>
    
            <input
    
                type='Text'
                placeholder="Buscar"
                value={inputValue}
                onChange={(event) => onInputChange(event)}
    
    
            ></input>
    
    
    
    
        </form>
    )
}




export default AddCategory