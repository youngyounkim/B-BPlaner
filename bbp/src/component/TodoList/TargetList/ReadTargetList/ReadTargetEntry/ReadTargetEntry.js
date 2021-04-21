import { useState, useRef } from "react";
import { CirclePicker } from "react-color";
import { useSelector, useDispatch } from "react-redux";
import {
  changeTargetColor,
  addTarget,
} from "../../../../../redux/actions/actions";
import ColorPicker from "../../ColorPicker";
import reactCSS from "reactcss";
import ReadActivityList from "../ReadTargetEntry/ReadActivityList/ReadActivityList";

// 테스트 /////////////////////////////////////////////////////////

const ReadTargetEntry = ({ id, name, color, activities }) => {
  const state = useSelector((state) => {
    return state.targetReducer;
  });
  const dispatch = useDispatch();
  // const targetInput = useRef();

  const targetName = useState(null);

  // const [targetColor, setTargetColor] = useState({
  //   r: "241",
  //   g: "112",
  //   b: "19",
  //   a: "1",
  // });

  // const handleColorPicker = function () {
  //   if (callFrom === "ReadTargetEntry") {
  //     dispatch(changeTargetColor(id, targetColor));
  //   }
  // };

  // const handleChangeColor = function (color) {
  //   setTargetColor(color.rgb);
  //   if (!targetInput) {
  //     targetInput.current.focus();
  //   }
  // };

  const handleTarget = function (e) {
    e.preventDefault();
    dispatch(
      addTarget(
        state.targetCnt,
        targetName,
        `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`
      )
    );
  };

  const styles = reactCSS({
    default: {
      color: {
        width: "100%",
        height: "20px",
        borderRadius: "1px",
        background: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`,
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
    },
  });

  return (
    <>
      <div className="mainEntry">
        <form onSubmit={handleTarget} className="MainEntryName" key={id}>
          {name}
        </form>
        <div className="ColorEntry">
          <ColorPicker
            id={id}
            targetColor={color}
            swatchStyle={styles.swatch}
            colorStyle={styles.color}
            popoverStyle={styles.popover}
            callFrom={"ReadTragetEntry"}
            // handleChangeColor={handleChangeColor}
          />
        </div>
      </div>
      <div className="SubEntry">{<ReadActivityList id={1} />}</div>
    </>
  );
};

export default ReadTargetEntry;
