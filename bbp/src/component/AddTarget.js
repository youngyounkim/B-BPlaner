import React, { useEffect, useState } from 'react';
// import { SketchPicker } from 'react-color'
import { SketchPicker } from 'react-color'
// import { CirclePicker} from 'react-color'
import { useSelector, useDispatch } from 'react-redux';
import { addTarget } from '../redux/actions/actions';
import reactCSS from 'reactcss';


// 목표이름과 목표칼라 자체는 AddTarget Component에서만 관리하는 State로 설정
// target 이라는 객체형 State에 목표이름과 목표칼라로 setState 해줌.
var inputStyles = {
  input: {
    border: '1px',
  },
  label: {
    fontSize: '12px',
    color: '#999',
  },
};

function AddTarget() {
    const state = useSelector(state => {
        console.log('state in AddTarget: ', state)
        return state.targetReducer})
    const dispatch = useDispatch();
    
    const [targetName, setTargetName] = useState(null);
    const [displayColorPicker, setDisplayColorPicker] = useState(false);
    const [targetColor, setTargetColor] = useState({
        r: '241',
        g: '112',
        b: '19',
        a: '1',
      });
    const handleTarget = function (e) {
      e.preventDefault();
      dispatch(addTarget(state.targetCnt, targetName, `rgba(${ targetColor.r }, ${ targetColor.g }, ${ targetColor.b }, ${ targetColor.a })`))
    }
    const handleTargetName = function (e) {
        setTargetName(e.target.value);
    }
    const handleChangeColor = function (color) {
        setTargetColor(color.rgb)
        console.log('color:',color.rgb)
    }

    const handleColorPicker = function () {
        setDisplayColorPicker(!displayColorPicker);
    }
    const handleClose = function () {
        setDisplayColorPicker(!displayColorPicker);
    }
    const styles = reactCSS({
        'default': {
          color: {
            width: '100%',
            height: '30px',
            borderRadius: '2px',
            background: `rgba(${ targetColor.r }, ${ targetColor.g }, ${ targetColor.b }, ${ targetColor.a })`,
          },
          swatch: {
            padding: '5px',
            background: '#fff',
            borderRadius: '1px',
            boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
            display: 'inline-block',
            cursor: 'pointer',
            width: '30%'
          },
          popover: {
            position: 'absolute',
            zIndex: '2',
          },
          cover: {
            position: 'fixed',
            top: '0px',
            right: '0px',
            bottom: '0px',
            left: '0px',
          },
          sectionBackground: {
            display: 'flex',
            flexDirection: 'column',
            width: '30%',
            backgroundColor: '#fff9c4',
            border: '1px',
            borderRadius: '5px',
            padding: '10px'
          },
          colorAndBtn: {
            display: 'flex',
            justifyContent: 'space-between'
          },
          completeBtn: {
            width: '20%'
          },
          inputName: {
            height: '5em',
            
          }
        },
      });
// 
    return (
        <div type='submit' className="addTarget"  style={ styles.sectionBackground}>                                                 
            <input type="text"  onChange={handleTargetName}  style={styles.inputName} placeholder="   목표를 입력해 주세요."></input>
            <hr />
            <div className="colorAndBtn" style={ styles.colorAndBtn}>
                <div style={ styles.swatch } onClick={ handleColorPicker }>
                    <div style={ styles.color } />
                </div>
                {displayColorPicker ? 
                <div style={ styles.popover }>
                    <div style={ styles.cover } onClick={ handleClose } />
                    <SketchPicker color={targetColor} onChangeComplete={ handleChangeColor } />
                </div> : null}
                <button className="completedBtn" style={ styles.completeBtn } onClick={handleTarget}>완료</button>
            </div>
        </div>
    )
}

export default AddTarget;