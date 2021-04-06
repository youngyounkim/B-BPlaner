import React, { useEffect, useState } from 'react';
import { SketchPicker } from 'react-color'
import { useSelector, useDispatch } from 'react-redux';
import { addTarget } from '../redux/actions/actions';

// 목표이름과 목표칼라 자체는 AddTarget Component에서만 관리하는 State로 설정
// target 이라는 객체형 State에 목표이름과 목표칼라로 setState 해줌.

function AddTarget() {
    const state = useSelector(state => state.targetReducer)
    const dispatch = useDispatch();
    const [targetName, setTargetName] = useState(null);
    const [targetColor, setTargetColor] = useState(null);
    

    const handleTargetName = function (e) {
        setTargetName(e.target.value);
    }
    const handleChangeColor = function (color) {
        setTargetColor(color.hex)
    }
    const handleTarget = function () {
        dispatch(addTarget(state.targetCnt, targetName, targetColor))
    }
    return (
        <>
            <input type="text" onChange={handleTargetName} value = '목표 이름을 작성해 주세요.'></input>
            <hr></hr>
            <SketchPicker onChangeComplete={handleChangeColor}/>
            <button className="completedBtn" onClick={handleTarget}>완료</button>
        </>
    )
}
// To solve detached HEAD issue
export default AddTarget;