import React, { useEffect, useState, useRef } from "react"
import { useDispatch } from "react-redux";
import { changeActivityName } from "../../../redux/actions/actions"

function SetActivityName({ targetId, activityId, name, handleSubmitClick }){
    const dispatch = useDispatch();

    const [ inputValue, setInputValue ] = useState(name)
    const Ref = useRef(null)
   
   
    useEffect(()=>{
        Ref.current.focus()        
    },[])

    const handleChangeValue = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(changeActivityName(targetId, activityId, inputValue))
        handleSubmitClick()
    }
    return (
        <form>
            <input 
                ref = { Ref } 
                value = { inputValue} 
                onChange = { handleChangeValue }>
            </input>
            <button type = 'submit' onClick = { handleSubmit }>확인</button>
        </form>
        
    )
}

export default SetActivityName
