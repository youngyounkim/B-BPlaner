import React, { useEffect, useState, useRef } from "react"
import { useDispatch } from "react-redux";
import { changeTargetName } from "../../../redux/actions/actions"

function SetTargetName({ targetId, name, handleSubmitClick }){
    const dispatch = useDispatch();

    const [ inputValue, setInputValue ] = useState(name)
    const targetNameInput = useRef();
   
   
    useEffect(()=>{
        targetNameInput.current.focus();
    },[])

    const handleChangeValue = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(changeTargetName(targetId, inputValue))
        handleSubmitClick()
    }
    return (
        <form>
            <input 
                ref = { targetNameInput } 
                value = { inputValue} 
                onChange = { handleChangeValue }>
            </input>
            <button type = 'submit' onClick = { handleSubmit }>수정완료</button>
        </form>
        
    )
}

export default SetTargetName;