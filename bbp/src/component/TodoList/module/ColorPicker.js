import React, { useEffect, useState, useRef, memo } from "react";
import { CirclePicker} from 'react-color'
import { useSelector, useDispatch } from "react-redux";
import { changeTargetColor } from "../../../redux/actions/actions";

function ColorPicker ( {targetColor, handleChangeColor, swatchStyle, colorStyle, popoverStyle, callFrom, id} ) {
    const state = useSelector((state) => {
        return state.targetReducer;
    });
    const dispatch = useDispatch();
    const [displayColorPicker, setDisplayColorPicker] = useState(false);

    useEffect( () => {
      console.log('targetColor in useEffect: ',targetColor)
      if(id){
        dispatch(changeTargetColor(id, targetColor)); // TODO 이부분 해결필요!
      }
      console.log(`id ${id}의 targetColor를 ${targetColor}로 변경!`);
      console.log('변경된 state.target: ',state.target);
    },[targetColor])

    const handleColorPicker = function () {
      // if(callFrom === 'ReadTargetEntry' && displayColorPicker === true) {
      //   dispatch(changeTargetColor(id, targetColor))
      //   console.log(`id ${id}의 targetColor를 ${targetColor}로 변경!`);
      // }
        setDisplayColorPicker(!displayColorPicker);
    };

    return (
        <>
          <div style={swatchStyle} onClick={handleColorPicker}>
            <div style={colorStyle} />
          </div>
          {displayColorPicker ? (
          <div style={popoverStyle}>
            <CirclePicker color={targetColor} onChangeComplete={handleChangeColor} onChange={handleColorPicker}/>
          </div>
          ) : null}
        </>
    )
}

export default memo(ColorPicker);
