import React, { useEffect, useState , useMemo } from 'react';
import ReadTargetList from './ReadTargetList'
import AddTarget from './AddTarget'
import loadingImg from '../images/loading.gif'
// import dummyData from '../data/targetData.json'

import dummy from '../redux/dummy.json'

function TargetList (props) {
    const [target , setTarget] = useState(null)

    useEffect(()=>{
        setTimeout(()=>setTarget(dummy.target),1000)
    })

    return (
        <div id = 'TargetList'>
            {target === null 
            ? <div id = 'Loading'>
                <img src={loadingImg}/>
            </div>
            : 
            <div>
                <ReadTargetList id = 'ReadTargetList' target = {target} />
                {/* <AddTarget />  */}
              </div>
            }
        </div>
    )
}



export default TargetList