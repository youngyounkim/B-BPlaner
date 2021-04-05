import React, { useEffect, useState , useMemo } from 'react';
import ReadTargetList from './ReadTargetList'
// import AddTarget from './AddTarget'
import loadingImg from '../images/loading.gif'
// import dummyData from '../data/targetData.json'
import AddTarget from './AddTarget.js'


function TargetList (props) {
    const [target , setTarget] = useState(null)

    // useEffect(()=>{
    //     setTimeout(()=>setTarget(dummyData),3000)
    // })

    return (
        <div id = 'TargetList'>
            {target === null 
            ? <div id = 'Loading'>
                <img src={loadingImg}/>
            </div>
            : 
            <div>
                <ReadTargetList id = 'ReadTargetList' target = {target} />
                {/* <AddTarget setTarget={setTarget}/>  */}
              </div>
            }
        </div>
    )
}



export default TargetList