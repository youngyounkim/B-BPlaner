import React from "react";
// Props 받는 부분 수정함 - 제천
function ReadTargetEntry({ name, color, activities }) {
  return (
    <div className="readTargetEntry">
      <div className="mainEntry">
        <div className="mainEntryName">{name}</div>
        <div className="mainEntryColor">{color}</div>
      </div>
      <div className="subEntry">
        {activities.map(el => {
          return <div className="activitesName">{el.name}</div>
        })}
      </div>
    </div>
  );
}

export default ReadTargetEntry;
