import React, { useState } from 'react';

function TargetList (props) {
    let [target, setTarget] = useState("text");

    return <div>{target}</div>
}
export default TargetList