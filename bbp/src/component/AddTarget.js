import React, { useEffect, useState } from 'react';
import { SketchPicker } from 'react-color'

// 목표이름과 목표칼라 자체는 AddTarget Component에서만 관리하는 State로 설정
// target 이라는 객체형 State에 목표이름과 목표칼라로 setState 해줌.

function AddTarget( {setTarget} ) {
    const [targetName, setTargetName] = useState(null);
    const [targetColor, setTargetColor] = useState(null);
    const [count, setCount] = useState(0); // id 생성 보조용

    const handleTargetName = function (e) {
        setTargetName(e.target.value);
    }
    const handleChangeColor = function (color) {
        setTargetColor(color.hex)
    }
    const handleTarget = function () {
        setCount(count + 1) // 목표 생성 시 마다 1씩 증가시키고 싶은데, 프로그램 재시작해도 state값 유지될까?
        setTarget( {id : `T${count}`, name : targetName, color : targetColor, activities : []})
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