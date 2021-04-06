import React, { useEffect, useState , useMemo } from 'react';
import ReadTargetList from './ReadTargetList'
import loadingImg from '../images/loading.gif'
import dummy from '../redux/dummy.json'
import AddTarget from './AddTarget'


function TargetList (props) {
    const [target , setTarget] = useState(dummy.target)

    console.log(target)
    // useEffect(()=>{
    //     setTimeout(()=>setTarget(dummy),3000)
    // })
    const handleAddTarget = target => {
        setTarget(state => [...state,target]
        )
    }


    return (
        <div id = 'TargetList'>
            {target === null 
            ? <div id = 'Loading'>
                <img src={loadingImg}/>
            </div>
            : 
            <div>
                <ReadTargetList id = 'ReadTargetList' target = {target} />
                <AddTarget setTarget={handleAddTarget}/> 
              </div>
            }
        </div>
    )
}



export default TargetList