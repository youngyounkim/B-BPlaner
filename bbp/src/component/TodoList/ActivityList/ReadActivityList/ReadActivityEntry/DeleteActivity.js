import React from 'react'
import { deleteActivity } from '../../../../../redux/actions'
import { useDispatch } from "react-redux";


function DeleteActivity ({TargetId, ActivityId}) {
    const dispatch = useDispatch();
    const delAct = () => {
        dispatch(deleteActivity(TargetId, ActivityId))
    }
    return <div onCLick = {delAct}>
        <img src = "./images/outline_close_black_24dp.png"></img>
    </div>
}

export default DeleteActivity