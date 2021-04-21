import React from "react";
import ReadActivityList from "./ReadActivityList/ReadActivityList"
// 확인했습니다~
function ReadTargetEntry({ name, color, activities }) {
  return (
    <div className="readTargetEntry">
      <div className="mainEntry">
        <div className="mainEntryName">{name}</div>
        <div className="mainEntryColor">{color}</div>
      </div>
      <div className="subEntry">
        {/* {<ReadActivityList id = {1}/>} 실험하기 위해서 잠깐 틀었습니다~ 민석*/}
        {activities.map((el) => {
          return <div className="activitesName">{el.name}</div>;
        })}
      </div>
    </div>
  );
}

export default ReadTargetEntry;
