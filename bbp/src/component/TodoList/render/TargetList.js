import React, { memo } from "react";
import ReadTargetList from "./ReadTargetList";
import loadingImg from "../../../images/loading.gif";
import AddTarget from "../edit/AddTarget";
import { useSelector} from "react-redux";


function TargetList(props) {
  // const [target ,] = useState(dummy.target) // redux로 옮겨가며 이후 지울 예정
  // Loading 여부 판단을 위해 State 필요해서 useSelector 사용 - 제천
  const state = useSelector((state) => {
    return state.targetReducer;
  });
  
  return (
    <div id="TargetList">
      {state.target === null ? (
        <div id="Loading">
          <img src={loadingImg} />
        </div>
      ) : (
        <div>
          <ReadTargetList id="ReadTargetList" target={state.target} />
          {/* 이후 target prop은 제거 예정. */}
          <AddTarget />
        </div>
      )}
    </div>
  );
}

export default memo(TargetList);
