import React, { useEffect, useState, useRef } from "react"
import SetActivityName from './SetActivityName'


function ReadtActivityEntry({ targetId, activityId, name }){
    
    const [ isClicked, setIsClicked ] = useState(false)
    const Ref = useRef(null)
    const handleClick = () => {
        setIsClicked(true)
    }
    
    useEffect( () => {
        const handleClick = (e)=>{
            if(Ref.current && !Ref.current.contains(e.target)){
                setIsClicked(false)
            }
        }
        document.addEventListener("mousedown", handleClick);
        return () => {
            document.removeEventListener("mousedown", handleClick);
        }
    }, [])
    
    const handleSubmitClick = () => {
        setIsClicked(false)
    }

    return (
        <> 
            {isClicked 
                ? <div ref = { Ref }>
                    < SetActivityName 
                        targetId = { targetId } 
                        activityId = { activityId } 
                        name = { name }
                        handleSubmitClick = { handleSubmitClick }
                    />
                </div>
                :<div ref = { Ref } onClick = { handleClick }> 
                    { name }
                </div>
            }
            {/* < DeleteActivity id = {id}/> */}
        </>
    )
}


export default ReadtActivityEntry

