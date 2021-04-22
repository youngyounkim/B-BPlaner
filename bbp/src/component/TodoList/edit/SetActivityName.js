import React, { useEffect, useState, useRef } from "react"
import { useDispatch } from "react-redux";
import { changeActivityName } from "../../../redux/actions/actions"

function SetActivityName({ targetId, activityId, name }){
    const dispatch = useDispatch();

    const [ inputValue, setInputValue ] = useState(name)
    const Ref = useRef(null),
        inputRef = useRef(inputValue)
    
    useEffect(()=>{
        Ref.current.focus()
        return ()=>{
            dispatch(changeActivityName(targetId, activityId, inputRef.current)) 
        }
    },[])

    const handleChangeValue = (e) => {
        setInputValue(e.target.value)
        inputRef.current = e.target.value

    }
    const preventPressEnter = (e) => {
        if(e.key === 'Enter'){
            e.preventDefault()
        }
    }

    return (
        <form>
            <input 
                ref = { Ref } 
                value = { inputValue} 
                onChange = { handleChangeValue } 
                onKeyPress = { preventPressEnter }
                >
            </input>
        </form>
        
    )
}

export default SetActivityName
