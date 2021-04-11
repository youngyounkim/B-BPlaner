import ReadTargetEntry from "./ReadTargetEntry/ReadTargetEntry";

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

export default ReadTargetList;
