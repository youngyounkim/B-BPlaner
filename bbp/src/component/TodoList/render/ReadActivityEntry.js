import React, { useEffect, useState, useRef, memo } from "react"
import SetActivityName from '../edit/SetActivityName'


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
    
    

    return (
        <> 
            {isClicked 
                ? <div ref = { Ref }>
                    < SetActivityName 
                        targetId = { targetId } 
                        activityId = { activityId } 
                        name = { name }
                    />
                </div>
                :<div ref = { Ref } onDoubleClick = { handleClick }> 
                    { name }
                </div>
            }
            {/* < DeleteActivity id = {id}/> */}
        </>
    )
}


export default memo(ReadtActivityEntry)

