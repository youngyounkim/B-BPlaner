import { useState, useRef, useEffect } from "react";
import { CirclePicker } from "react-color";
import { useSelector, useDispatch } from "react-redux";
import {
  changeTargetColor,
  addTarget,
} from "../../../../../redux/actions/actions";
import ColorPicker from "../../ColorPicker";
import reactCSS from "reactcss";
import ReadActivityList from "../ReadTargetEntry/ReadActivityList/ReadActivityList";
import SetTargetName from './SetTargetName';

// 테스트 /////////////////////////////////////////////////////////

const ReadTargetEntry = ({ id, name, color, activities }) => {
  const state = useSelector((state) => {
    return state.targetReducer;
  });
  const dispatch = useDispatch();
  // const targetInput = useRef();

  const targetName = useState(null);
  const targetNameInput = useRef(); //제천
  const [ isClicked, setIsClicked ] = useState(false) //제천
  const [targetColor, setTargetColor] = useState(color);
  const handleClick = () => {
    setIsClicked(true)
  }
  const handleSubmitClick = () => {
    setIsClicked(false)
  }

  useEffect( () => {
    const handleClick = (e)=>{
        if(targetNameInput.current && !targetNameInput.current.contains(e.target)){
            setIsClicked(false)
        }
    }
    document.addEventListener("mousedown", handleClick);
    return () => {
        document.removeEventListener("mousedown", handleClick);
    }
}, [])

  // const handleColorPicker = function () {
  //   if (callFrom === "ReadTargetEntry") {
  //     dispatch(changeTargetColor(id, targetColor));
  //   }
  // };

  const handleChangeColor = function (color) {
    setTargetColor(color.hex);
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
        alignItems: "center",
        backgroundColor: "#bbdefb",
        padding: "7px",
        margin: "3px",
        border: "1px solid #212121",
        width: "30%"
      },
      textEntry: {
        marginLeft: "10px"
      },
      subEntry: {
        backgroundColor: "#efebe9",
        width: "30%",
        border: "1px solid #212121",
        margin: "0 0 3px 20px",
        padding: "5px"
      }
    },
  });

  return (
    <>
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
        {isClicked 
                ? <div ref = { targetNameInput }>
                    < SetTargetName 
                        targetId = { id }
                        name = { name }
                        handleSubmitClick = { handleSubmitClick }
                    />
                </div>
                :<div className="textEntry" style={styles.textEntry} ref = { targetNameInput } onDoubleClick = { handleClick }> 
                    { name }
                </div>
        }
        {/* <div className="textEntry" style={styles.textEntry}>
          {name}
        </div> */}
      </div>
      <div className="SubEntry" style={styles.subEntry}>{<ReadActivityList id={id} />}</div>
    </>
  );
};

export default ReadTargetEntry;
