import React, { useEffect, useState , useMemo } from 'react';
import ReadTargetList from './ReadTargetList'
// import AddTarget from './AddTarget'
import loadingImg from '../images/loading.gif'
import dummyData from '../data/targetData.json'



function TargetList (props) {
    const [target , setTarget] = useState(null)

    useEffect(()=>{
        setTimeout(()=>setTarget(dummyData),3000)
    })

    return (
        <div id = 'TargetList'>
            {target === null 
            ? <div id = 'Loading'>
                <img src={loadingImg}/>
            </div>
            : <ReadTargetList id = 'ReadTargetList' target = {target} />}
            {/* <AddTarget/> */}
        </div>
    )
}



export default TargetList