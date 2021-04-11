import React from "react";
// 확인했습니다~
function ReadTargetEntry({ name, color, activities }) {
  return (
    <div className="readTargetEntry">
      <div className="mainEntry">
        <div className="mainEntryName">{name}</div>
        <div className="mainEntryColor">{color}</div>
      </div>
      <div className="subEntry">
        {activities.map((el) => {
          return <div className="activitesName">{el.name}</div>;
        })}
      </div>
    </div>
  );
}

export default ReadTargetEntry;
