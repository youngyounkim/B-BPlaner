import { memo } from 'react'
import ReadTargetEntry from "./ReadTargetEntry";

function ReadTargetList({ target }) {
  return target.map((el) => {
    return (
      <ReadTargetEntry
        key={el.id}
        id={el.id}
        name={el.name}
        color={el.color}
        activities={el.activities}
      />
    );
  });
}

export default memo(ReadTargetList);
