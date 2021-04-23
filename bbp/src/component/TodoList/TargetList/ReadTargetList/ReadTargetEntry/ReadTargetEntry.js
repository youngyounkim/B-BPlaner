import { useState, useRef } from "react";
import { CirclePicker } from "react-color";
import { useSelector, useDispatch } from "react-redux";
import {
  changeTargetColor,
  addTarget,
  addActivity,
  deleteTarget,
} from "../../../../../redux/actions/actions";
import ColorPicker from "../../ColorPicker";
import reactCSS from "reactcss";
import ReadActivityList from "../ReadTargetEntry/ReadActivityList/ReadActivityList";
import AddActivity from "./AddActivity";

// 테스트 /////////////////////////////////////////////////////////

const ReadTargetEntry = ({ id, name, color, activities }) => {
  const state = useSelector((state) => {
    return state.targetReducer;
  });

  const dispatch = useDispatch();
  // const targetInput = useRef();

  // const targetName = useState(null);

  const [targetColor, setTargetColor] = useState(color);

  // const handleColorPicker = function () {
  //   if (callFrom === "ReadTargetEntry") {
  //     dispatch(changeTargetColor(id, targetColor));
  //   }
  // };

  const handleChangeColor = function (color) {
    setTargetColor(color.hex);
  };

  const handleDeleteTodo = (id) => {
    // e.preventDefault();
    console.log("삭제", id);
    dispatch(deleteTarget(id));
  };

  // const handleTarget = function (e) {
  //   e.preventDefault();
  //   dispatch(
  //     addTarget(
  //       state.targetCnt,
  //       targetName,
  //       `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`
  //     )
  //   );
  // };

  const styles = reactCSS({
    default: {
      color: {
        width: "100%",
        height: "20px",
        borderRadius: "1px",
        background: `${targetColor}`,
      },
      swatch: {
        padding: "3px",
        background: "#fff",
        borderRadius: "1px",
        boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
        display: "inline-block",
        cursor: "pointer",
        width: "20px",
      },
      popover: {
        position: "absolute",
        zIndex: "2",
        backgroundColor: "#fafafa",
        padding: "10px",
        border: "1px solid #212121",
        borderRadius: "5px",
      },
      mainEntry: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#bbdefb",
        padding: "7px",
        margin: "3px",
        border: "1px solid #212121",
        width: "30%",
      },
      textEntry: {
        marginLeft: "10px",
      },
      delBtn: {
        display: "flex",
        float: "right",
        alignItems: "flex-end",
      },
      subEntryList: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#cfd8dc",
        width: "30%",
        margin: "3px 3px 3px 9px",
      },
      subEntry: {
        display: "flex",
        flexDirection: "column",
      },
      addSubEntry: {
        display: "flex",
      },
    },
  });

  return (
    <>
      <div className="Entry">
        <div className="mainEntry" style={styles.mainEntry}>
          {/* <form onSubmit={handleTarget} className="MainEntryName" key={id}>
          {name}
        </form> */}
          <div className="ColorEntry">
            <ColorPicker
              id={id}
              targetColor={targetColor}
              swatchStyle={styles.swatch}
              colorStyle={styles.color}
              popoverStyle={styles.popover}
              callFrom={"ReadTargetEntry"}
              handleChangeColor={handleChangeColor}
            />
          </div>
          <div className="textEntry" style={styles.textEntry}>
            {name}
          </div>
          <button className="delBtn" onClick={() => handleDeleteTodo(id)}>
            삭제
          </button>
        </div>
        <div className="subEntryList" style={styles.subEntryList}>
          <div className="subEntry" style={styles.subEntry}>
            {<ReadActivityList id={id} />}
          </div>
          <div className="addSubEntry" style={styles.addSubEntry}>
            {<AddActivity id={id} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default ReadTargetEntry;
