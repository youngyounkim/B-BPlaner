import { useState, useRef, useEffect, memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  changeTargetColor,
  addTarget,
  addActivity,
  deleteTarget,
} from "../../../redux/actions/actions";
import reactCSS from "reactcss";
import SetTargetName from '../edit/SetTargetName';
import AddActivity from "../edit/AddActivity";
import ColorPicker from "../module/ColorPicker";
import ReadActivityList from "./ReadActivityList";

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

  const handleChangeColor = function (color) {
    setTargetColor(color.hex);
  };

  const handleDeleteTodo = (id) => {
    // e.preventDefault();
    console.log("삭제", id);
    dispatch(deleteTarget(id));
  };

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
        alignItems: "center",
        backgroundColor: "#bbdefb",
        padding: "7px",
        margin: "3px",
        border: "1px solid #212121",
        width: "30%",
      },
      textEntry: {
        marginLeft: "10px"
      },
      // subEntry: {
      //   backgroundColor: "#efebe9",
      //   width: "30%",
      //   border: "1px solid #212121",
      //   margin: "0 0 3px 20px",
      //   padding: "5px",
      //   marginLeft: "10px",
      // },
      delBtn: {
        display: "flex",
        float: "right",
        alignItems: "flex-end",
        marginLeft: "10px"
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
      <div className="Entry">
        <div className="mainEntry" style={styles.mainEntry}>
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
          <button className="delBtn" style={styles.delBtn} onClick={() => handleDeleteTodo(id)}>
            삭제
          </button>
        </div>   
        {/* <div className="SubEntry" style={styles.subEntry}>{<ReadActivityList id={id} />} */}
          <div className="subEntryList" style={styles.subEntryList}>
            <div className="subEntry" style={styles.subEntry}>
              {<ReadActivityList id={id} />}
            </div>
            <div className="addSubEntry" style={styles.addSubEntry}>
              {<AddActivity id={id} />}
            </div>
          </div>

      </div>
  );
};

export default memo(ReadTargetEntry);
