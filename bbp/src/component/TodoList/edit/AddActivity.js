import { useState, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addActivity } from "../../../redux/actions/actions";

function AddActivity({ id }) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const state = useSelector((state) => {
    return state.targetReducer;
  });
  // id는 target의 아이디를 가져옵니다.
  // 가져온 target id를 기준으로 데이터를 추가합니다.
  //
  const cName = (e) => {
    setName(e.target.value);
  };
  const submitActibity = (e) => {
    e.preventDefault();
    dispatch(addActivity(id, name));
    setName("");
  };
  return (
    <form onSubmit={submitActibity}>
      <input value={name} onChange={cName}></input>
      <button type="submit">추가</button>
    </form>
  );
}
export default memo(AddActivity);
