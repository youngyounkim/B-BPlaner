import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTarget } from "../../../redux/actions/actions";
import reactCSS from "reactcss";
import ColorPicker from './ColorPicker';

function AddTarget() {
  const state = useSelector((state) => {
    return state.targetReducer;
  });
  const dispatch = useDispatch();
  const targetInput = useRef(); // 목표 입력 부분을 DOM없이 늘 선택하기 위한 변수

  const [targetName, setTargetName] = useState(null);
  
  const [targetColor, setTargetColor] = useState({
    r: "241",
    g: "112",
    b: "19",
    a: "1",
  });
  const handleTarget = function (e) {
    e.preventDefault();
    dispatch(
      addTarget( 
        state.targetCnt,
        targetName,
        `rgba(${targetColor.r}, ${targetColor.g}, ${targetColor.b}, ${targetColor.a})`
      )
    );
    targetInput.current.value = '';
    targetInput.current.focus();
  };
  const handleTargetName = function (e) {
    setTargetName(e.target.value);
  };
  const handleChangeColor = function (color) {
    setTargetColor(color.rgb);
    targetInput.current.focus();
  };

  // swatch, color, popover 는 ColorPicker props로 넘겨줘야 하므로 필요. 나머지는 css파일로 이관 가능. 
  const styles = reactCSS({
    default: {
      color: {
        width: "100%",
        height: "30px",
        borderRadius: "2px",
        background: `rgba(${targetColor.r}, ${targetColor.g}, ${targetColor.b}, ${targetColor.a})`,
      },
      swatch: {
        padding: "5px",
        background: "#fff",
        borderRadius: "1px",
        boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
        display: "inline-block",
        cursor: "pointer",
        width: "30%",
      },
      popover: {
        position: "absolute",
        zIndex: "2",
        backgroundColor: "#fafafa",
        padding: "10px",
        border: "1px solid #212121",
        borderRadius: "5px",
      },
      sectionBackground: {
        display: "flex",
        flexDirection: "column",
        width: "30%",
        backgroundColor: "#fff9c4",
        border: "1px",
        borderRadius: "5px",
        padding: "10px",
      },
      colorAndBtn: {
        display: "flex",
        justifyContent: "space-between",
      },
      completeBtn: {
        width: "20%",
      },
      inputName: {
        height: "5em",
      },
    },
  });
  //
  return (
    <form onSubmit={handleTarget} className="addTarget" style={styles.sectionBackground}>
      <input
        type="text"
        onChange={handleTargetName}
        style={styles.inputName}
        placeholder="   목표를 입력해 주세요."
        ref={targetInput}
      ></input>
      <hr></hr>
      <div className="colorAndBtn" style={styles.colorAndBtn}>
        <ColorPicker targetColor={targetColor} swatchStyle={styles.swatch} colorStyle={styles.color} popoverStyle={styles.popover} cursorPosition={targetInput} handleChangeColor={handleChangeColor} />
        <input type="submit" value="완  료"
          className="completedBtn"
          style={styles.completeBtn}
        />
      </div>
    </form>
  );
}

export default AddTarget;
