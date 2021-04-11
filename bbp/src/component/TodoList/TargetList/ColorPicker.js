import React, { useEffect, useState, useRef } from "react";
import { CirclePicker} from 'react-color'
import { useSelector, useDispatch } from "react-redux";

function ColorPicker ( {targetColor, handleChangeColor, swatchStyle, colorStyle, popoverStyle}) {
    const state = useSelector((state) => {
        return state.targetReducer;
    });

    const [displayColorPicker, setDisplayColorPicker] = useState(false);


    const handleColorPicker = function () {
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

export default ColorPicker;
