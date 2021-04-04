import "./App.css";
import { SketchPicker } from 'react-color'

import TargetList from "./component/TargetList"  // 테스트용 입니다. - 민석

function App() {
  const handleColor = function (color) { // 테스트용 - 제천
    console.log('color: ', color.hex);
  }
  return (
    <>
      <TargetList/> {/* 테스트용 입니다. -- 민석 */}
      <SketchPicker onChangeComplete={handleColor}/> {/* 테스트용 제천 */}
    </>

  )
}
export default App;


