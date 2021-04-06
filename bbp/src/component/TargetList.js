import React, { useEffect, useState , useMemo } from 'react';
import ReadTargetList from './ReadTargetList'
import loadingImg from '../images/loading.gif'
import dummy from '../redux/dummy.json'
import AddTarget from './AddTarget'


function TargetList (props) {
    const [target ,] = useState(dummy.target) // redux로 옮겨가며 이후 지울 예정

    // useEffect(()=>{
    //     setTimeout(()=>setTarget(dummy.target),1000)
    // })

    return (
        <div id = 'TargetList'>
            {target === null 
            ? <div id = 'Loading'>
                <img src={loadingImg}/>
            </div>
            : 
            <div>
                <ReadTargetList id = 'ReadTargetList' target = {target} /> {/* 이후 target prop은 제거 예정. */}
                <AddTarget /> 
              </div>
            }
        </div>
    )
}



export default TargetList