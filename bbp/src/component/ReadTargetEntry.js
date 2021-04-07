import React from "react";

function ReadTargetEntry({ target }) {
  return (
    <div className="readTargetEntry">
      <div className="mainEntry">
        <div className="mainEntryName">{target.name}</div>
        <div className="mainEntryColor">{target.color}</div>
      </div>
      <div className="subEntry">
        <div className="activitesName">{target.activities.name}</div>
      </div>
    </div>
  );
}

export default ReadTargetEntry;
